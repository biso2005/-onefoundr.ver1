'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Target, RotateCcw } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

// ── Types ──────────────────────────────────────────────────────

type Symptom = {
  id: string
  label: string
  category: 'visibility' | 'conversion' | 'client' | 'personal'
}

type Diagnosis = {
  id: string
  name: string
  headline: string
  meaning: string
  fix: string[]
  honestReality: string
  nextStepLabel: string
  nextStepHref: string
  triggers: string[]
  antiTriggers: string[]
}

// ── Symptoms data ──────────────────────────────────────────────

const symptomCategories = [
  {
    id: 'visibility',
    label: 'Visibility',
    colour: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'conversion',
    label: 'Conversion',
    colour: 'from-violet-500 to-purple-500',
  },
  {
    id: 'client',
    label: 'Client Quality',
    colour: 'from-orange-500 to-amber-500',
  },
  {
    id: 'personal',
    label: 'Personal',
    colour: 'from-green-500 to-emerald-500',
  },
]

const symptoms: Symptom[] = [
  // Visibility
  { id: 'no-enquiries', label: 'I rarely get enquiries or leads', category: 'visibility' },
  { id: 'feel-invisible', label: 'I feel invisible in my market', category: 'visibility' },
  { id: 'nobody-knows', label: 'People do not know I exist', category: 'visibility' },
  { id: 'low-engagement', label: 'My content gets little engagement', category: 'visibility' },
  // Conversion
  { id: 'enquiries-dont-convert', label: 'I get enquiries but few convert', category: 'conversion' },
  { id: 'go-quiet', label: 'People say they are interested then go quiet', category: 'conversion' },
  { id: 'haggle-prices', label: 'Clients haggle on my prices', category: 'conversion' },
  { id: 'justify-value', label: 'I am constantly justifying my value', category: 'conversion' },
  // Client
  { id: 'wrong-clients', label: 'Wrong type of clients keep showing up', category: 'client' },
  { id: 'not-valued', label: 'Clients do not value what I do', category: 'client' },
  { id: 'one-off', label: 'I attract one-off clients not repeat business', category: 'client' },
  { id: 'no-referrals', label: 'Clients do not refer me to others', category: 'client' },
  // Personal
  { id: 'dread-work', label: 'I dread doing the work', category: 'personal' },
  { id: 'unpredictable', label: 'Results are unpredictable month to month', category: 'personal' },
  { id: 'changed-niche', label: 'I have changed my niche multiple times already', category: 'personal' },
  { id: 'stopped-working', label: 'It used to work but stopped working recently', category: 'personal' },
]

// ── Diagnoses data ─────────────────────────────────────────────

const diagnoses: Diagnosis[] = [
  {
    id: 'visibility',
    name: 'Visibility Problem',
    headline: 'You have the right niche — nobody knows you exist yet.',
    meaning:
      'Your niche is probably fine. The problem is distribution, not positioning. You have not yet built a consistent presence in the places your ideal clients spend time.',
    fix: [
      'Pick one channel and commit to it for 90 days — do not spread across multiple platforms.',
      'Show up consistently with content that speaks directly to your niche audience.',
      'Make it easy for people to find you — optimise your profile, your website, and your bio for your specific niche.',
      'Start conversations in the communities where your ideal clients already gather.',
    ],
    honestReality:
      'Do not change your niche because of a visibility problem. Changing direction resets everything. The answer is more consistent output in fewer places for longer than feels comfortable.',
    nextStepLabel: 'Go to Marketing in The Engine',
    nextStepHref: '/marketing',
    triggers: ['no-enquiries', 'feel-invisible', 'low-engagement'],
    antiTriggers: ['wrong-clients', 'enquiries-dont-convert'],
  },
  {
    id: 'messaging',
    name: 'Messaging Problem',
    headline: 'You are visible — but what you say is not landing.',
    meaning:
      'People can find you but they do not immediately understand who you help, what you do for them, or why they should care. Your messaging is too generic, too feature-focused, or written for the wrong person.',
    fix: [
      'Rewrite your core message around a specific person with a specific problem — not a broad audience.',
      'Lead with the outcome your clients get, not the service you provide.',
      'Use the language your clients use to describe their problem — not industry language.',
      'Test your niche statement on someone outside your industry. If they cannot explain it back to you, simplify it.',
    ],
    honestReality:
      'Most messaging problems are actually positioning problems in disguise. If you are struggling to write a clear message, it is usually because you have not been specific enough about who exactly you help.',
    nextStepLabel: 'Go to Positioning in The Offer',
    nextStepHref: '/offer',
    triggers: ['wrong-clients', 'no-enquiries', 'feel-invisible'],
    antiTriggers: ['enquiries-dont-convert', 'haggle-prices'],
  },
  {
    id: 'pricing',
    name: 'Pricing Problem',
    headline: 'Your price is either too low or your credibility has not caught up yet.',
    meaning:
      'When clients haggle consistently it usually means one of two things — your price is genuinely too high for the value they perceive, or your credibility markers are not strong enough to justify what you charge. Both are fixable.',
    fix: [
      'Audit your credibility markers — case studies, testimonials, results, and social proof.',
      'If you have strong results but weak proof, document and publish your case studies immediately.',
      'If your price feels high even to you, that is a sign you do not yet believe in your own value — work on this before raising prices.',
      'Consider whether your offer is clearly enough connected to a business outcome clients can measure.',
    ],
    honestReality:
      'Lowering your price to stop the haggling is almost never the right answer. It attracts worse clients and signals lower quality. Fix the credibility gap instead.',
    nextStepLabel: 'Go to Pricing Strategy in The Offer',
    nextStepHref: '/offer',
    triggers: ['enquiries-dont-convert', 'haggle-prices', 'not-valued'],
    antiTriggers: ['no-enquiries', 'wrong-clients'],
  },
  {
    id: 'offer',
    name: 'Offer Problem',
    headline: 'People are interested but your offer is not converting them.',
    meaning:
      'You are reaching the right people and they are responding — but something in the offer itself is causing them to hesitate. This could be the structure, the price point, the deliverables, the timeline, or the risk they feel in saying yes.',
    fix: [
      'Talk to three people who did not convert and ask them what stopped them — listen without defending.',
      'Look at your offer structure — is the outcome clear, the process logical, and the risk low enough?',
      'Consider a lower-commitment entry point that lets people experience your work before buying the main offer.',
      'Reduce the perceived risk — a clear process, a guarantee, or a first paid session can all help.',
    ],
    honestReality:
      'The problem is the package, not the niche. Resist the urge to change your market when the real fix is redesigning what you are selling and how you are presenting it.',
    nextStepLabel: 'Go to Offer Packaging in The Offer',
    nextStepHref: '/offer',
    triggers: ['enquiries-dont-convert', 'go-quiet'],
    antiTriggers: ['haggle-prices', 'wrong-clients'],
  },
  {
    id: 'trust',
    name: 'Trust Problem',
    headline: 'People are not confident enough in you to commit.',
    meaning:
      'Trust takes time to build and is easily damaged by inconsistency. If you have changed direction multiple times, if your online presence is sparse or dated, or if you have very little social proof, potential clients feel the risk of working with you more than the opportunity.',
    fix: [
      'Stop changing direction — every pivot resets your trust signals and confuses your audience.',
      'Collect and publish testimonials and case studies from every client you have worked with.',
      'Create content consistently in one place for long enough that people can see your track record.',
      'Be specific about your results — vague claims of success are invisible, specific numbers and outcomes are credible.',
    ],
    honestReality:
      'Trust is built through time and consistency. There is no shortcut. The single most effective thing you can do is stay in your lane, show up consistently, and document your results.',
    nextStepLabel: 'Go to Trust Building in The Engine',
    nextStepHref: '/marketing',
    triggers: ['enquiries-dont-convert', 'no-referrals', 'not-valued', 'changed-niche'],
    antiTriggers: ['no-enquiries', 'wrong-clients'],
  },
  {
    id: 'too-small',
    name: 'Market Too Small',
    headline: 'Your niche exists — but there are not enough people in it.',
    meaning:
      'You have positioned well but the total number of potential clients in your niche is too small to generate consistent leads. This is a structural problem that requires widening your definition, changing your geography, or adjusting your price to make fewer clients viable.',
    fix: [
      'Run the Niche Size Calculator to confirm whether the numbers support your income goal.',
      'Widen your audience definition by one level — who else has the same problem?',
      'Go global instead of local if your work can be done remotely.',
      'Raise your price so you need fewer clients to hit your income goal.',
    ],
    honestReality:
      'A niche that is too small is not a positioning failure — it is a market reality. The fix is mechanical: widen or raise prices. Do not abandon your specialism, just expand who you offer it to.',
    nextStepLabel: 'Run the Niche Size Calculator',
    nextStepHref: '/start/niche-selection/niche-size-calculator',
    triggers: ['no-enquiries', 'feel-invisible', 'unpredictable'],
    antiTriggers: ['wrong-clients', 'low-engagement'],
  },
  {
    id: 'wrong-fit',
    name: 'Wrong Fit For You',
    headline: 'The niche works — you are just not the right person for it.',
    meaning:
      'The market exists and clients are reachable, but the work itself is draining you. This is a founder-idea fit problem, not a market problem. Continuing in a niche you dread will lead to burnout, inconsistent output, and clients who can feel your lack of enthusiasm.',
    fix: [
      'Complete the Founder-Idea Fit Assessment to understand what specifically is not working for you.',
      'Identify whether it is the clients, the work, the business model, or the niche itself that is the problem.',
      'If it is the work — consider Path 3 and plan a deliberate pivot.',
      'If it is the clients — consider niching more specifically to attract the people you actually enjoy working with.',
    ],
    honestReality:
      'This is a real niche change and it deserves to be treated as one. Do not drift — make a deliberate decision, plan the transition, and execute it cleanly.',
    nextStepLabel: 'Take the Founder-Idea Fit Assessment',
    nextStepHref: '/start/idea-validation/founder-idea-fit',
    triggers: ['dread-work', 'unpredictable', 'no-referrals'],
    antiTriggers: ['no-enquiries', 'enquiries-dont-convert'],
  },
  {
    id: 'market-shift',
    name: 'Market Shift',
    headline: 'Your niche worked — then something changed.',
    meaning:
      'Something external has shifted — technology, the economy, buyer behaviour, or competitive dynamics. Your niche has not disappeared but it has changed enough that your current approach is no longer as effective as it was.',
    fix: [
      'Diagnose what specifically changed — is it demand, competition, pricing pressure, or buyer priorities?',
      'Talk to five of your best past clients and ask them what their biggest challenges are right now.',
      'Do not panic pivot — adapt your positioning and offer before abandoning your niche entirely.',
      'Run competitor research to understand how others in your space are responding to the shift.',
    ],
    honestReality:
      'Market shifts require adaptation, not panic. The worst response is a sudden pivot away from everything you have built. Diagnose first, adapt second, and only pivot if the market has genuinely gone.',
    nextStepLabel: 'Go to Competitor Research in Idea Validation',
    nextStepHref: '/start/idea-validation/competitor-research',
    triggers: ['stopped-working', 'unpredictable', 'low-engagement'],
    antiTriggers: ['wrong-clients', 'dread-work'],
  },
]

// ── Diagnosis logic ────────────────────────────────────────────

function getDiagnosis(selected: string[]): Diagnosis | null {
  if (selected.length === 0) return null

  const scores = diagnoses.map((diagnosis) => {
    const triggerScore = diagnosis.triggers.filter((t) => selected.includes(t)).length
    const antiScore = diagnosis.antiTriggers.filter((t) => selected.includes(t)).length
    return { diagnosis, score: triggerScore - antiScore * 0.5 }
  })

  scores.sort((a, b) => b.score - a.score)
  const top = scores[0]
  if (top.score <= 0) return null
  return top.diagnosis
}

// ── Main component ─────────────────────────────────────────────

export default function NicheDiagnosticPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  function toggleSymptom(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
    setShowResult(false)
  }

  function handleDiagnose() {
    if (selected.length === 0) return
    setShowResult(true)
  }

  function handleReset() {
    setSelected([])
    setShowResult(false)
  }

  const diagnosis = showResult ? getDiagnosis(selected) : null

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
            The Niche Diagnostic
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Select every symptom that applies to your current situation. We will identify your primary diagnosis and tell you exactly what to do about it.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Symptom selector */}
          <div className="space-y-8 mb-10">
            {symptomCategories.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${cat.colour}`} />
                  <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                    {cat.label}
                  </h2>
                </div>
                <div className="space-y-2">
                  {symptoms
                    .filter((s) => s.category === cat.id)
                    .map((symptom) => {
                      const isSelected = selected.includes(symptom.id)
                      return (
                        <button
                          key={symptom.id}
                          onClick={() => toggleSymptom(symptom.id)}
                          className={`w-full text-left flex items-center gap-3 px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
                            isSelected
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'border-orange-500 bg-orange-500'
                                : 'border-gray-300'
                            }`}
                          >
                            {isSelected && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          {symptom.label}
                        </button>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>

          {/* Selected count */}
          {selected.length > 0 && (
            <p className="text-sm text-gray-500 mb-4 text-center">
              {selected.length} symptom{selected.length !== 1 ? 's' : ''} selected
            </p>
          )}

          {/* Diagnose button */}
          <button
            onClick={handleDiagnose}
            disabled={selected.length === 0}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:shadow-lg transition-shadow disabled:opacity-40 disabled:cursor-not-allowed mb-10"
          >
            Diagnose my niche
          </button>

          {/* Result */}
          {showResult && (
            <div className="space-y-5">
              {diagnosis ? (
                <>
                  {/* Diagnosis header */}
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8">
                    <p className="text-orange-100 text-xs font-semibold uppercase tracking-wide mb-2">
                      Your diagnosis
                    </p>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {diagnosis.name}
                    </h2>
                    <p className="text-orange-100 font-medium">
                      {diagnosis.headline}
                    </p>
                  </div>

                  {/* What this means */}
                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                      What this means
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {diagnosis.meaning}
                    </p>
                  </div>

                  {/* The fix */}
                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                      The fix
                    </p>
                    <div className="space-y-3">
                      {diagnosis.fix.map((step, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <span className="text-orange-500 font-bold text-sm shrink-0 w-5 mt-0.5">
                            {i + 1}.
                          </span>
                          <p className="text-sm text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Honest reality */}
                  <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                      Honest reality check
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed italic">
                      {diagnosis.honestReality}
                    </p>
                  </div>

                  {/* Next step */}
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                      Your next step
                    </p>
                    <Link
                      href={diagnosis.nextStepHref}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:shadow-lg transition-shadow"
                    >
                      {diagnosis.nextStepLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </>
              ) : (
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 text-center">
                  <p className="text-gray-700 font-medium mb-2">
                    No clear diagnosis from those symptoms.
                  </p>
                  <p className="text-sm text-gray-500">
                    Try selecting more symptoms or symptoms from different categories to help us identify the primary problem.
                  </p>
                </div>
              )}

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
