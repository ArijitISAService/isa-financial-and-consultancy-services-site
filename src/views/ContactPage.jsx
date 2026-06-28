'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import PageBanner from '../components/PageBanner'
import ServiceMultiSelect from '../components/ServiceMultiSelect'
import { officeInfo, ownerInfo, services } from '../data/siteContent'

const contactSchema = yup.object({
  name: yup.string().trim().required('Name is required.'),
  email: yup.string().trim().email('Enter a valid email address.').required('Email is required.'),
  subject: yup.string().trim().required('Subject is required.'),
  service: yup.array().of(yup.string().trim().required()).min(1, 'Please select at least one service.'),
  message: yup.string().trim().required('Message is required.'),
})

export default function ContactPage() {
  const [submitState, setSubmitState] = useState({ type: '', message: '' })

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      service: [],
      message: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      setSubmitState({ type: '', message: '' })

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send enquiry right now.')
      }

      setSubmitState({
        type: 'success',
        message: result.message || 'Your enquiry has been sent successfully.',
      })
      reset()
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to send enquiry right now.',
      })
    }
  }

  return (
    <>
      <PageBanner
        title="Contact"
        description="Tell us what you need and we will help you shape the next step into something manageable."
      />

      <section className="section-space">
        <div className="container contact-grid">
          <div className="contact-card p-4 p-lg-5">
            <h2 className="mb-3">Reach out with the basics, we will help with the rest</h2>
            <p className="text-muted mb-4">
              You do not need a perfectly written brief. A short note about your goal is enough to get the
              conversation moving.
            </p>

            <div className="contact-meta-grid mb-4">
              <div className="subtle-card p-3">
                <span className="eyebrow d-block mb-1">Owner</span>
                <h3 className="h4 mb-1">{ownerInfo.name}</h3>
                <p className="mb-1 text-muted">{ownerInfo.title}</p>
                <a href={`tel:${ownerInfo.phone}`} className="fw-bold text-decoration-none">
                  {ownerInfo.phone}
                </a>
              </div>

              <div className="subtle-card p-3">
                <span className="eyebrow d-block mb-1">{officeInfo.label}</span>
                <h3 className="h5 mb-2">Kaikhali VIP Office</h3>
                <p className="mb-0 text-muted">{officeInfo.address}</p>
              </div>
            </div>

            <div className="map-box p-4">
              <div className="d-flex h-100 flex-column justify-content-between">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="map-pin">
                    <strong>ISA</strong>
                  </div>
                  <span className="badge-soft">Responsive support</span>
                </div>
                <div>
                  <h3 className="h4 text-white mb-2">A simple inquiry is enough</h3>
                  <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Tell us what service you need, and we will guide the next action in a direct, practical way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card p-4 p-lg-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row g-3"
              noValidate
              autoComplete="off"
            >
              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-control"
                  {...register('name')}
                  placeholder="Your name"
                  required
                />
                {errors.name ? <div className="form-error mt-2">{errors.name.message}</div> : null}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  {...register('email')}
                  placeholder="you@example.com"
                  required
                />
                {errors.email ? <div className="form-error mt-2">{errors.email.message}</div> : null}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="service">
                  Services
                </label>
                <Controller
                  control={control}
                  name="service"
                  render={({ field }) => (
                    <ServiceMultiSelect
                      id="service"
                      options={services}
                      value={field.value}
                      onChange={field.onChange}
                      error={errors.service?.message}
                      placeholder="Select a service"
                    />
                  )}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="form-control"
                  {...register('subject')}
                  placeholder="What do you need help with?"
                  required
                />
                {errors.subject ? <div className="form-error mt-2">{errors.subject.message}</div> : null}
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="form-control"
                  {...register('message')}
                  placeholder="Share a few details about your goal or timeline."
                  required
                />
                {errors.message ? <div className="form-error mt-2">{errors.message.message}</div> : null}
              </div>

              <div className="col-12 d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-gold btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>

            {submitState.message ? (
              <div
                className={`alert mt-4 mb-0 rounded-4 ${
                  submitState.type === 'success' ? 'alert-success' : 'alert-danger'
                }`}
              >
                {submitState.message}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
