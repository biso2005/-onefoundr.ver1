'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Target, RotateCcw } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

// ── Types ──────────────────────────────────────────────────────

type BusinessType =
  | 'service'
  | 'physical'
  | 'digital'
  | 'knowledge'
  | 'content'
  | 'saas'
  | 'community'
  | ''

type IncomeGoal = '1k-2k' | '2k-5k' | '5k-10k' | '10k-plus' | ''

type ContentMonetisation =
  | 'sponsorships'
  | 'paid-newsletter'
  | 'affiliate'
  | 'combination'
  | ''

type MarketLocation =
  | 'uk-only'
  | 'uk-english'
  | 'global'
  | 'local'
  | ''

type Verdict = 'strong' | 'borderline' | 'too-narrow' | 'too-broad'

type CalculatorInputs = {
  businessType: BusinessType
  incomeGoal: IncomeGoal
  pricePoint: string
  contentMonetisation: ContentMonetisation
  nicheStatement: string
  marketLocation: MarketLocation
}

type CalculationResult = {
  verdict: Verdict
  headline: string
  summary: string
  metrics: { label: string; value: string }[]
  options: string[]
  nextStepLabel: string
  nextStepHref: string
}

// ── Helpers ────────────────────────────────────────────────────

function getIncomeMin(goal: IncomeGoal): number {
  if (goal === '1k-2k') return 1000
  if (goal === '2k-5k') return 2000
  if (goal === '5k-10k') return 5000
  if (goal === '10k-plus') return 10000
  return 0
}

function getLocationMultiplier(location: MarketLocation): number {
  if (location === 'local') return 0.1
  if (location === 'uk-only') return 0.3
  if (location === 'uk-english') return 0.7
  if (location === 'global') return 1
  return 0.5
}

function fmt(n: number): string {
  return Math.round(n).toLocaleString('en-GB')
}

function calculate(inputs: CalculatorInputs): CalculationResult {
  const income = getIncomeMin(inputs.incomeGoal)
  const price = parseFloat(inputs.pricePoint) || 0
  const locationMult = getLocationMultiplier(inputs.marketLocation)

  let metrics: { label: string; value: string }[] = []
  let rawMarketNeeded = 0

  switch (inputs.businessType) {
    case 'service': {
      const clientsPerMonth = price > 0 ? income / price : 0
      const annualNewClients = clientsPerMonth * 12 * 0.7
      rawMarketNeeded = annualNewClients / 0.02
      const reachableMarket = rawMarketNeeded * locationMult
      metrics = [
        { label: 'Clients needed per month', value: fmt(clientsPerMonth) },
        { label: 'New clients needed per year', value: fmt(annualNewClients) },
        { label: 'Market size needed (raw)', value: fmt(rawMarketNeeded) },
        { label: 'Reachable market (your location)', value: fmt(reachableMarket) },
      ]
      rawMarketNeeded = reachableMarket
      break
    }
    case 'physical': {
      const ordersNeeded = price > 0 ? income / price : 0
      const newCustomers = ordersNeeded * 0.8
      const trafficNeeded = newCustomers / 0.02
      rawMarketNeeded = trafficNeeded * locationMult
      metrics = [
        { label: 'Orders needed per month', value: fmt(ordersNeeded) },
        { label: 'New customers needed per month', value: fmt(newCustomers) },
        { label: 'Monthly traffic needed', value: fmt(trafficNeeded) },
        { label: 'Reachable traffic (your location)', value: fmt(rawMarketNeeded) },
      ]
      break
    }
    case 'digital': {
      const unitsNeeded = price > 0 ? income / price : 0
      const trafficNeeded = unitsNeeded / 0.015
      const audienceNeeded = trafficNeeded * 3
      rawMarketNeeded = audienceNeeded * locationMult
      metrics = [
        { label: 'Units to sell per month', value: fmt(unitsNeeded) },
        { label: 'Monthly traffic needed', value: fmt(trafficNeeded) },
        { label: 'Email list size needed', value: fmt(audienceNeeded) },
        { label: 'Reachable audience (your location)', value: fmt(rawMarketNeeded) },
      ]
      break
    }
    case 'knowledge': {
      const studentsPerMonth = price > 0 ? income / price : 0
      const cohortSize = studentsPerMonth * 3
      rawMarketNeeded = (studentsPerMonth / 0.02) * locationMult
      metrics = [
        { label: 'Students needed per month', value: fmt(studentsPerMonth) },
        { label: 'Cohort size (quarterly model)', value: fmt(cohortSize) },
        { label: 'Reachable audience needed', value: fmt(rawMarketNeeded) },
      ]
      break
    }
    case 'saas': {
      const subscribersNeeded = price > 0 ? income / price : 0
      const trialUsersNeeded = subscribersNeeded / 0.03
      const churnLoss = subscribersNeeded * 0.05
      rawMarketNeeded = (trialUsersNeeded / 0.02) * locationMult
      metrics = [
        { label: 'Paying subscribers needed', value: fmt(subscribersNeeded) },
        { label: 'Trial users needed (at 3% conversion)', value: fmt(trialUsersNeeded) },
        { label: 'Monthly churn to replace (5% rate)', value: fmt(churnLoss) + ' subscribers' },
        { label: 'Reachable market needed', value: fmt(rawMarketNeeded) },
      ]
      break
    }
    case 'community': {
      const membersNeeded = price > 0 ? income / price : 0
      const communitySize = membersNeeded / 0.02
      const churnLoss = membersNeeded * 0.05
      rawMarketNeeded = communitySize * locationMult
      metrics = [
        { label: 'Paying members needed', value: fmt(membersNeeded) },
        { label: 'Total community size needed', value: fmt(communitySize) },
        { label: 'Monthly churn to replace (5% rate)', value: fmt(churnLoss) + ' members' },
        { label: 'Reachable community (your location)', value: fmt(rawMarketNeeded) },
      ]
      break
    }
    case 'content': {
      if (inputs.contentMonetisation === 'paid-newsletter') {
        const price10 = 10
        const subscribersNeeded = income / price10
        rawMarketNeeded = (subscribersNeeded / 0.05) * locationMult
        metrics = [
          { label: 'Paid subscribers needed (at £10/mo)', value: fmt(subscribersNeeded) },
          { label: 'Total audience needed (5% conversion)', value: fmt(rawMarketNeeded) },
        ]
      } else if (inputs.contentMonetisation === 'sponsorships') {
        const cpm = 30
        const audienceNeeded = (income / cpm) * 1000
        rawMarketNeeded = audienceNeeded * locationMult
        metrics = [
          { label: 'Audience needed for sponsorships (£30 CPM)', value: fmt(audienceNeeded) },
          { label: 'Reachable audience (your location)', value: fmt(rawMarketNeeded) },
        ]
      } else {
        const audienceNeeded = income * 100
        rawMarketNeeded = audienceNeeded * locationMult
        metrics = [
          { label: 'Estimated audience needed', value: fmt(audienceNeeded) },
          { label: 'Reachable audience (your location)', value: fmt(rawMarketNeeded) },
        ]
      }
      break
    }
    default:
      metrics = []
  }

  // ── Verdict logic ──────────────────────────────────────────

  let verdict: Verdict
  let headline: string
  let summary: string
  let options: string[]
  let nextStepLabel: string
  let nextStepHref: string

  const nicheWordCount = inputs.nicheStatement.trim().split(/\s+/).length

  if (rawMarketNeeded === 0 || price === 0) {
    verdict = 'borderline'
    headline = 'Enter a price to see your verdict'
    summary =
      'Fill in your price point above to get a full calculation and verdict on whether your niche is big enough.'
    options = []
    nextStepLabel = 'Back to Niche Selection'
    nextStepHref = '/start/niche-selection'
  } else if (nicheWordCount > 12) {
    verdict = 'too-broad'
    headline = 'Your niche statement is too broad ⚠️'
    summary =
      'A niche statement longer than 12 words is usually a sign it has not been defined precisely enough. The more specific your niche, the easier it is to reach and convert.'
    options = [
      'Tighten your niche statement to one sentence of 10 words or fewer.',
      'Use the Niche Formula Library to find the right structure for your business type.',
      'Go one level deeper on your audience — who specifically within your current audience?',
    ]
    nextStepLabel = 'Use the Niche Formula Library'
    nextStepHref = '/start/niche-selection/niche-formula-library'
  } else if (rawMarketNeeded < 100) {
    verdict = 'too-narrow'
    headline = 'Your niche is too narrow ❌'
    summary =
      'There are not enough potential customers to hit your income goal at this price point. You need to widen your audience, lower your income goal temporarily, or go global instead of local.'
    options = [
      'Widen your audience — who else has this problem or wants this product?',
      'Lower your income goal for the first 12 months and grow into a bigger niche.',
      'Go global not local — your niche may be too small for one geography.',
    ]
    nextStepLabel = 'Back to the Niche Finder'
    nextStepHref = '/start/niche-selection/niche-finder'
  } else if (rawMarketNeeded > 500000) {
    verdict = 'too-broad'
    headline = 'Your niche is too broad ⚠️'
    summary =
      'The market exists but it is too large to position against effectively as a solo founder. You need to go one level deeper to find the specific group you can reach and own.'
    options = [
      'Narrow your audience — who specifically within your current market?',
      'Add a situation or context to your niche — who needs this right now and why?',
      'Use the Niche Formula Library to rebuild your niche statement with more precision.',
    ]
    nextStepLabel = 'Use the Niche Formula Library'
    nextStepHref = '/start/niche-selection/niche-formula-library'
  } else if (rawMarketNeeded < 1000) {
    verdict = 'borderline'
    headline = 'Borderline — possible but tight ⚠️'
    summary =
      'The numbers are achievable but you have very little margin for error. One option is to raise your price, which reduces how many customers you need. Another is to add a second income stream once you have traction.'
    options = [
      'Raise your price — even a 20% increase meaningfully reduces customer volume needed.',
      'Expand your market slightly — one level broader on your audience definition.',
      'Plan a second income stream from month six to reduce dependence on volume.',
    ]
    nextStepLabel = 'Take the 5 Question Stress Test'
    nextStepHref = '/start/niche-selection/5-question-stress-test'
  } else {
    verdict = 'strong'
    headline = 'Strong niche ✅'
    summary =
      'The market is big enough, the numbers are realistic, and your niche statement is specific enough to position effectively. The next step is stress-testing your niche before you commit to it.'
    options = [
      'Market big enough for your income goal ✅',
      'Reachability looks realistic for your location ✅',
      'Conversion rate assumptions are achievable ✅',
    ]
    nextStepLabel = 'Take the 5 Question Stress Test'
    nextStepHref = '/start/niche-selection/5-question-stress-test'
  }

  return { verdict, headline, summary, metrics, options, nextStepLabel, nextStepHref }
}

// ── Verdict colour helper ──────────────────────────────────────

function verdictStyle(verdict: Verdict) {
  if (verdict === 'strong') return 'bg-green-50 border-green-200'
  if (verdict === 'borderline') return 'bg-amber-50 border-amber-200'
  return 'bg-red-50 border-red-200'
}

function verdictHeadlineColour(verdict: Verdict) {
  if (verdict === 'strong') return 'text-green-700'
  if (verdict === 'borderline') return 'text-amber-700'
  return 'text-red-700'
}

// ── Select component ───────────────────────────────────────────

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:border-orange-400 transition-colors"
      >
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────

export default function NicheSizeCalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    businessType: '',
    incomeGoal: '',
    pricePoint: '',
    contentMonetisation: '',
    nicheStatement: '',
    marketLocation: '',
  })
  const [result, setResult] = useState<CalculationResult | null>(null)

  function update<K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }))
    setResult(null)
  }

  function handleCalculate() {
    if (!inputs.businessType || !inputs.incomeGoal || !inputs.marketLocation) return
    setResult(calculate(inputs))
  }

  function handleReset() {
    setInputs({
      businessType: '',
      incomeGoal: '',
      pricePoint: '',
      contentMonetisation: '',
      nicheStatement: '',
      marketLocation: '',
    })
    setResult(null)
  }

  const isContent = inputs.businessType === 'content'
  const canCalculate =
    inputs.businessType !== '' &&
    inputs.incomeGoal !== '' &&
    inputs.marketLocation !== '' &&
    (isContent ? inputs.contentMonetisation !== '' : inputs.pricePoint !== '')

  const priceLabel: Record<string, string> = {
    service: 'Average project or retainer value (£)',
    physical: 'Average order value (£)',
    digital: 'Product price (£)',
    knowledge: 'Course or programme price (£)',
    saas: 'Monthly subscription price (£)',
    community: 'Monthly membership fee (£)',
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
      <section className="bg-[#1A1A1A] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/start/niche-selection"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Niche Selection</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Free Tool</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Niche Size Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Find out if your niche is big enough to hit your income goal — before you commit to it.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">

            {/* Input 1: Business type */}
            <Select
              label="1. What type of business is this?"
              value={inputs.businessType}
              onChange={(v) => update('businessType', v as BusinessType)}
              options={[
                { value: 'service', label: 'Service — you do work for clients' },
                { value: 'physical', label: 'Physical product — you make or source something' },
                { value: 'digital', label: 'Digital product — create once, sell many times' },
                { value: 'knowledge', label: 'Knowledge & education — you teach or coach' },
                { value: 'content', label: 'Content & media — you build an audience' },
                { value: 'saas', label: 'SaaS & software — you build a tool' },
                { value: 'community', label: 'Community — you bring people together' },
              ]}
            />

            {/* Input 2: Income goal */}
            <Select
              label="2. What is your monthly income goal?"
              value={inputs.incomeGoal}
              onChange={(v) => update('incomeGoal', v as IncomeGoal)}
              options={[
                { value: '1k-2k', label: '£1,000 – £2,000 per month' },
                { value: '2k-5k', label: '£2,000 – £5,000 per month' },
                { value: '5k-10k', label: '£5,000 – £10,000 per month' },
                { value: '10k-plus', label: '£10,000+ per month' },
              ]}
            />

            {/* Input 3: Price point (adapts by business type) */}
            {inputs.businessType && !isContent && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  3. {priceLabel[inputs.businessType] ?? 'Your price point (£)'}
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputs.pricePoint}
                  onChange={(e) => update('pricePoint', e.target.value)}
                  placeholder="e.g. 1500"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>
            )}

            {/* Input 3 (content): Monetisation method */}
            {isContent && (
              <Select
                label="3. Primary monetisation method"
                value={inputs.contentMonetisation}
                onChange={(v) => update('contentMonetisation', v as ContentMonetisation)}
                options={[
                  { value: 'sponsorships', label: 'Sponsorships' },
                  { value: 'paid-newsletter', label: 'Paid newsletter' },
                  { value: 'affiliate', label: 'Affiliate marketing' },
                  { value: 'combination', label: 'Combination of the above' },
                ]}
              />
            )}

            {/* Input 4: Niche statement */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                4. Your niche statement
              </label>
              <input
                type="text"
                value={inputs.nicheStatement}
                onChange={(e) => update('nicheStatement', e.target.value)}
                placeholder="e.g. Virtual assistant for independent podcast hosts"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:border-orange-400 transition-colors"
              />
              <p className="text-xs text-gray-400 mt-1">
                Keep it to one sentence. The more specific the better.
              </p>
            </div>

            {/* Input 5: Market location */}
            <Select
              label="5. Where is your market?"
              value={inputs.marketLocation}
              onChange={(v) => update('marketLocation', v as MarketLocation)}
              options={[
                { value: 'local', label: 'Local — my city or region' },
                { value: 'uk-only', label: 'UK only' },
                { value: 'uk-english', label: 'UK + English speaking world' },
                { value: 'global', label: 'Global' },
              ]}
            />

            {/* Calculate button */}
            <button
              onClick={handleCalculate}
              disabled={!canCalculate}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:shadow-lg transition-shadow disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Calculate my niche size
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className="mt-10 space-y-5">

              {/* Verdict */}
              <div className={`rounded-xl border-2 p-6 ${verdictStyle(result.verdict)}`}>
                <h2 className={`text-2xl font-bold mb-3 ${verdictHeadlineColour(result.verdict)}`}>
                  {result.headline}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {result.summary}
                </p>
              </div>

              {/* Metrics */}
              {result.metrics.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                    Your numbers
                  </p>
                  <div className="space-y-3">
                    {result.metrics.map((m) => (
                      <div key={m.label} className="flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-600">{m.label}</span>
                        <span className="text-sm font-bold text-gray-900 shrink-0">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Options */}
              {result.options.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                    {result.verdict === 'strong' ? 'What this means' : 'Your options'}
                  </p>
                  <div className="space-y-2">
                    {result.options.map((option, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-orange-400 font-bold text-sm shrink-0 mt-0.5">
                          {result.verdict === 'strong' ? '✓' : `${i + 1}.`}
                        </span>
                        <p className="text-sm text-gray-700">{option}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next step */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Next step
                </p>
                <Link
                  href={result.nextStepHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:shadow-lg transition-shadow"
                >
                  {result.nextStepLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Reset */}
              <div className="text-center pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start again
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}

