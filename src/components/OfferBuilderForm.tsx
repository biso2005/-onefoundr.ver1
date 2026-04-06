"use client"
import React, { useState } from 'react'

export default function OfferBuilderForm() {
  const [outcome, setOutcome] = useState('')
  const [deliverables, setDeliverables] = useState('')
  const [scope, setScope] = useState('')
  const [hours, setHours] = useState('')
  const [price, setPrice] = useState('')
  const [preview, setPreview] = useState(false)

  const summaryText = () => {
    return `Offer Summary:\n\nOutcome:\n${outcome || '-'}\n\nDeliverables:\n${deliverables || '-'}\n\nScope:\n${scope || '-'}\n\nEstimated hours: ${hours || '-'}\nPrice: ${price || '-'}\n`
  }

  function copySummary() {
    navigator.clipboard?.writeText(summaryText())
  }

  function downloadJSON() {
    const data = {
      outcome,
      deliverables,
      scope,
      hours,
      price,
      createdAt: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'offer-builder.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6">
      <h3 className="text-xl font-semibold mb-4">Offer Builder</h3>

      <div className="space-y-4">
        <label className="block">
          <div className="text-sm font-medium text-gray-700 mb-1">Primary outcome</div>
          <input
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            placeholder="The measurable outcome your customer gets"
            className="w-full rounded-md border-gray-200 shadow-sm focus:ring-1 focus:ring-teal-500"
          />
        </label>

        <label className="block">
          <div className="text-sm font-medium text-gray-700 mb-1">Deliverables (bullet points)</div>
          <textarea
            value={deliverables}
            onChange={(e) => setDeliverables(e.target.value)}
            placeholder="e.g. 1:1 onboarding, 3 templates, 2-week support"
            className="w-full rounded-md border-gray-200 shadow-sm h-28 p-2 focus:ring-1 focus:ring-teal-500"
          />
        </label>

        <label className="block">
          <div className="text-sm font-medium text-gray-700 mb-1">Scope (what's included / excluded)</div>
          <input
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            placeholder="Short scope statement"
            className="w-full rounded-md border-gray-200 shadow-sm focus:ring-1 focus:ring-teal-500"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label>
            <div className="text-sm font-medium text-gray-700 mb-1">Estimated hours</div>
            <input
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="e.g. 10"
              className="w-full rounded-md border-gray-200 shadow-sm focus:ring-1 focus:ring-teal-500"
            />
          </label>

          <label>
            <div className="text-sm font-medium text-gray-700 mb-1">Price</div>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. $1,500"
              className="w-full rounded-md border-gray-200 shadow-sm focus:ring-1 focus:ring-teal-500"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPreview((p) => !p)}
            className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md"
          >
            {preview ? 'Hide Preview' : 'Preview Offer'}
          </button>

          <button type="button" onClick={copySummary} className="px-3 py-2 border rounded-md">
            Copy summary
          </button>

          <button type="button" onClick={downloadJSON} className="px-3 py-2 border rounded-md">
            Download JSON
          </button>
        </div>

        {preview && (
          <div className="mt-4 bg-gray-50 border border-gray-100 rounded-md p-4">
            <pre className="whitespace-pre-wrap text-sm text-gray-800">{summaryText()}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
