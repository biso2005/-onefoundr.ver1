"use client"
import React, { useState } from 'react'

export default function OfferBuilderForm() {
  const [outcome, setOutcome] = useState('')
  const [deliverables, setDeliverables] = useState('')
  const [scope, setScope] = useState('')
  const [hours, setHours] = useState('')
  const [price, setPrice] = useState('')
  const [preview, setPreview] = useState(false)

  const [templateName, setTemplateName] = useState('')
  const [templates, setTemplates] = useState<Record<string, any>[]>([])
  const [syncKey, setSyncKey] = useState('')
  const [syncing, setSyncing] = useState(false)

  const STORAGE_KEY = 'offer-builder-templates'

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setTemplates(JSON.parse(raw))
    } catch (e) {
      // ignore
    }
  }, [])

  const saveTemplates = (next: Record<string, any>[]) => {
    setTemplates(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch (e) {
      // ignore
    }
  }

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

  function saveTemplate() {
    const name = templateName.trim() || `Template ${new Date().toISOString()}`
    const t = { name, outcome, deliverables, scope, hours, price, createdAt: new Date().toISOString() }
    const next = [t, ...templates.filter((x) => x.name !== name)]
    saveTemplates(next)
    setTemplateName('')
  }

  function loadTemplate(name: string) {
    const t = templates.find((x) => x.name === name)
    if (!t) return
    setOutcome(t.outcome || '')
    setDeliverables(t.deliverables || '')
    setScope(t.scope || '')
    setHours(t.hours || '')
    setPrice(t.price || '')
  }

  function deleteTemplate(name: string) {
    const next = templates.filter((x) => x.name !== name)
    saveTemplates(next)
  }

  async function syncToServer() {
    setSyncing(true)
    try {
      const res = await fetch('/api/templates', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': syncKey || '' },
        body: JSON.stringify({ templates }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'sync failed')
      alert('Templates synced to server')
    } catch (e: any) {
      alert('Sync failed: ' + (e?.message || e))
    } finally {
      setSyncing(false)
    }
  }

  async function loadFromServer() {
    setSyncing(true)
    try {
      const res = await fetch('/api/templates', { headers: { 'x-api-key': syncKey || '' } })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'load failed')
      const incoming = json?.templates || []
      saveTemplates(incoming)
      alert('Templates loaded from server')
    } catch (e: any) {
      alert('Load failed: ' + (e?.message || e))
    } finally {
      setSyncing(false)
    }
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

        {/* Templates UI */}
        <div className="mt-4 border-t pt-4">
          <h4 className="text-sm font-medium mb-2">Templates</h4>
          <div className="flex gap-2 mb-3">
            <input
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Template name"
              className="flex-1 rounded-md border-gray-200 shadow-sm p-2"
            />
            <button onClick={saveTemplate} className="px-3 py-2 bg-teal-600 text-white rounded-md">
              Save
            </button>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <input
              value={syncKey}
              onChange={(e) => setSyncKey(e.target.value)}
              placeholder="Optional sync key"
              className="flex-1 rounded-md border-gray-200 shadow-sm p-2"
            />
            <button onClick={syncToServer} disabled={syncing} className="px-3 py-2 bg-blue-600 text-white rounded-md">
              {syncing ? 'Syncing…' : 'Sync to server'}
            </button>
            <button onClick={loadFromServer} disabled={syncing} className="px-3 py-2 border rounded-md">
              {syncing ? 'Loading…' : 'Load from server'}
            </button>
          </div>

          <div className="space-y-2">
            {templates.length === 0 && <p className="text-sm text-gray-500">No templates saved yet.</p>}
            {templates.map((t) => (
              <div key={t.name} className="flex items-center justify-between bg-white p-2 rounded-md border">
                <div className="text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleString()}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => loadTemplate(t.name)} className="px-2 py-1 border rounded-md text-sm">
                    Load
                  </button>
                  <button onClick={() => deleteTemplate(t.name)} className="px-2 py-1 border rounded-md text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
