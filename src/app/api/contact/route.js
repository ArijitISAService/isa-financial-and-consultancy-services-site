import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const DEFAULT_RECEIVER = 'sohamnayak005@gmail.com'

function buildServiceList(services) {
  return Array.isArray(services) && services.length ? services.join(', ') : 'Not specified'
}

function createTransporter() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: String(port) === '465',
    auth: {
      user,
      pass,
    },
  })
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = String(body?.name || '').trim()
    const email = String(body?.email || '').trim()
    const subject = String(body?.subject || '').trim()
    const message = String(body?.message || '').trim()
    const services = Array.isArray(body?.service) ? body.service.map((item) => String(item).trim()).filter(Boolean) : []

    if (!name || !email || !subject || !message || !services.length) {
      return NextResponse.json(
        { message: 'Please complete all required fields before sending.' },
        { status: 400 },
      )
    }

    const transporter = createTransporter()

    if (!transporter) {
      return NextResponse.json(
        {
          message:
            'Mail is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM in your environment.',
        },
        { status: 500 },
      )
    }

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER
    const ownerEmail = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECEIVER
    const serviceText = buildServiceList(services)

    const commonLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Services: ${serviceText}`,
      '',
      'Message:',
      message,
    ]

    const ownerMail = transporter.sendMail({
      from: fromAddress,
      to: ownerEmail,
      replyTo: email,
      subject: `[ISA Enquiry] ${subject}`,
      text: commonLines.join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17304f">
          <h2 style="margin:0 0 12px;color:#1657b8">New enquiry received</h2>
          <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin:0 0 8px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p style="margin:0 0 8px"><strong>Services:</strong> ${escapeHtml(serviceText)}</p>
          <p style="margin:16px 0 8px"><strong>Message:</strong></p>
          <div style="padding:12px 14px;border:1px solid #dbe7ff;border-radius:12px;background:#f8fbff">
            ${escapeHtml(message).replaceAll('\n', '<br />')}
          </div>
        </div>
      `,
    })

    const confirmationMail = transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: 'We received your ISA enquiry',
      text: [
        `Hello ${name},`,
        '',
        'We have received your enquiry and will review it shortly.',
        `Selected services: ${serviceText}`,
        '',
        'Thank you for contacting ISA Financial & Consultancy Services.',
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17304f">
          <h2 style="margin:0 0 12px;color:#1657b8">We received your enquiry</h2>
          <p style="margin:0 0 12px">Hello ${escapeHtml(name)},</p>
          <p style="margin:0 0 12px">
            We have received your enquiry and will review it shortly.
          </p>
          <p style="margin:0 0 12px"><strong>Selected services:</strong> ${escapeHtml(serviceText)}</p>
          <p style="margin:0">Thank you for contacting ISA Financial & Consultancy Services.</p>
        </div>
      `,
    })

    await Promise.all([ownerMail, confirmationMail])

    return NextResponse.json({
      message: 'Your enquiry has been sent and a confirmation email has been delivered.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      {
        message: 'We could not send your enquiry right now. Please try again in a moment.',
      },
      { status: 500 },
    )
  }
}
