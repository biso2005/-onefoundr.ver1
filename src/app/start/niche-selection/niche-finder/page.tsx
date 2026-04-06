"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Target, RotateCcw } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

// ── Types ──────────────────────────────────────────────────────

type Answer = {
  q1: string
  q2: string
  q3: string
  q4: string
  q5: string
}

type Result = {
  path: string
  pathDescription: string
  formula: string
  nicheSize: string
  nextStep: string
  nextStepHref: string
}

// ── Questions data ─────────────────────────────────────────────

const questions = [
  {
    id: 'q1',
    question: 'What are you selling?',
    options: [
      { value: 'service', label: 'A service — you do work for clients' },
      { value: 'physical', label: 'A physical product — you make or source something' },
      { value: 'digital', label: 'A digital product — create once, sell many times' },
      { value: 'knowledge', label: 'Knowledge or education — you teach or coach' },
      { value: 'content', label: 'Content or media — you build an audience' },
      { value: 'saas', label: 'Software or SaaS — you build a tool' },
      { value: 'community', label: 'A community — you bring people together' },
      { value: 'unsure', label: "I'm not sure yet" },
    ],
  },
  {
    id: 'q2',
    question: 'Where are you right now?',
    options: [
      { value: 'not-started', label: "I haven't started yet — choosing a direction" },
      { value: 'just-started', label: "I've just started — taking anyone I can get" },
      { value: 'established', label: 'I am established but serving too many different people' },
      { value: 'not-working', label: 'I had a niche but it is not working anymore' },
    ],
  },
  {
    id: 'q3',
    question: 'What is your income goal per month?',
    options: [
      { value: '1k-2k', label: '£1,000 – £2,000' },
      { value: '2k-5k', label: '£2,000 – £5,000' },
      { value: '5k-10k', label: '£5,000 – £10,000' },
      { value: '10k-plus', label: '£10,000+' },
    ],
  },
  {
    id: 'q4',
    question: 'How do you want to work?',
    options: [
      { value: 'remote', label: 'From home — fully remote' },
      { value: 'local', label: 'Locally — in person in my area' },
      { value: 'either', label: "Either — I don't mind" },
    ],
  },
  {
    id: 'q5',
    question: 'What is your strongest asset right now?',
    options: [
      { value: 'skill', label: 'A specific skill or expertise' },
      { value: 'network', label: 'A network or community I am already part of' },
      { value: 'product', label: 'A product idea or physical thing' },
      { value: 'experience', label: 'A unique personal experience or story' },
      { value: 'technical', label: 'A technical ability or software skill' },
      { value: 'unsure', label: "I'm not sure yet" },
    ],
  },
]

// ── Output logic ───────────────────────────────────────────────

function getPath(answers: Answer): string {
  if (answers.q2 === 'not-working') return 'Path 3: The Pivot Niche'
  if (answers.q2 === 'established') return 'Path 2 transitioning to Path 1'
  if (answers.q2 === 'just-started' || answers.q5 === 'unsure') return 'Path 2: The Emergent Niche'
  if (
    answers.q2 === 'not-started' &&
    (answers.q5 === 'skill' || answers.q5 === 'product' || answers.q5 === 'technical')
  )
    return 'Path 1: The Deliberate Niche'
  return 'Path 2: The Emergent Niche'
}

function getPathDescription(answers: Answer): string {
  const path = getPath(answers)
  if (path === 'Path 1: The Deliberate Niche')
    return 'You have a clear asset and have not started yet. That is the ideal position to choose your niche deliberately — before you take on clients or build anything. Use the Niche Formula and Niche Size Calculator to lock in your direction.'
  if (path === 'Path 2: The Emergent Niche')
    return 'You are early enough that forcing a niche now could be premature. Start broad, take on good work, and watch for the patterns. Your niche will reveal itself faster than you think if you know what to look for.'
  if (path === 'Path 2 transitioning to Path 1')
    return 'You have been around long enough to see patterns in your best clients and most satisfying work. Now is the time to move from broad to specific — deliberately. Use the Niche Matrix to map what you already know.'
  if (path === 'Path 3: The Pivot Niche')
    return 'Your current niche is not working. Before you pick a new one, you need to diagnose why — because the problem might not be the niche itself. Run the Niche Diagnostic first, then use the Pivot Niche guide to move cleanly.'
  return ''
}

function getFormula(q1: string): string {
  const formulas: Record<string, string> = {
    service: 'Skill + Audience + Pain = Your Niche\n"I do [SKILL] for [AUDIENCE] who struggle with [PAIN]"',
    physical: 'Product + Aesthetic + Lifestyle = Your Niche\n"I make [PRODUCT] with a [AESTHETIC] feel for people who live [LIFESTYLE]"',
    digital: 'Solution + Specific User + Specific Situation = Your Niche\n"I created [SOLUTION] for [SPECIFIC USER] who are dealing with [SPECIFIC SITUATION]"',
    knowledge: 'Expertise + Transformation + Specific Audience = Your Niche\n"I help [SPECIFIC AUDIENCE] go from [BEFORE] to [AFTER] using my knowledge of [EXPERTISE]"',
    content: 'Topic + Unique Perspective + Specific Audience = Your Niche\n"I create [TOPIC] content from a [UNIQUE PERSPECTIVE] angle for [SPECIFIC AUDIENCE]"',
    saas: 'Technical Insight + Underserved Market = Your Niche\n"I noticed that [EXISTING TOOLS] don\'t solve [SPECIFIC PROBLEM] for [UNDERSERVED MARKET] so I built [YOUR TOOL]"',
    community: 'Identity + Shared Experience + Unmet Need = Your Niche\n"I built a community for [IDENTITY] who have experienced [SHARED EXPERIENCE] and need [UNMET NEED] that doesn\'t exist anywhere else"',
    unsure: 'Start with the Business Ideas hub to find what you want to sell first — then come back for your niche formula.',
  }
  return formulas[q1] ?? formulas['unsure']
}

function getNicheSize(q3: string): string {
  const sizes: Record<string, string> = {
    '1k-2k': 'You need a niche of at least 200 reachable potential customers. That is achievable even in a narrow niche — focus on specificity over size.',
    '2k-5k': 'You need a niche of at least 500 reachable potential customers. A focused local or online niche can reach this — but you need a clear way to find them.',
    '5k-10k': 'You need a niche of at least 1,000 reachable potential customers. At this income level you need either a high price point or a scalable product alongside your service.',
    '10k-plus': 'You need a niche of at least 2,000 reachable potential customers — or a very high price point with a smaller audience. Use the Niche Size Calculator to stress-test your specific numbers.',
  }
  return sizes[q3] ?? ''
}

function getNextStep(answers: Answer): { label: string; href: string } {
  const path = getPath(answers)
  if (answers.q1 === 'unsure') return { label: 'Explore Business Ideas first', href: '/start/business-ideas' }
  if (path === 'Path 3: The Pivot Niche') return { label: 'Run the Niche Diagnostic', href: '/start/niche-selection/niche-diagnostic' }
  if (path === 'Path 2 transitioning to Path 1') return { label: 'Use the Niche Matrix', href: '/start/niche-selection/niche-matrix' }
  if (path === 'Path 1: The Deliberate Niche') return { label: 'Use the Niche Size Calculator', href: '/start/niche-selection/niche-size-calculator' }
  return { label: 'Read the Emergent Niche guide', href: '/start/niche-selection/emergent-niche' }
}

function getResult(answers: Answer): Result {
  const nextStep = getNextStep(answers)
  return {
    path: getPath(answers),
    pathDescription: getPathDescription(answers),
    formula: getFormula(answers.q1),
    nicheSize: getNicheSize(answers.q3),
    nextStep: nextStep.label,
    nextStepHref: nextStep.href,
  }
}

// ── Option button ──────────────────────────────────────────────

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
        selected
          ? 'border-orange-500 bg-orange-50 text-orange-700'
          : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50'
      }`}
    >
      {label}
    </button>
  )
}

// ── Main component ─────────────────────────────────────────────

export default function NicheFinderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<Answer>>({})
  const [showResult, setShowResult] = useState(false)

  const totalSteps = questions.length
  const currentQuestion = questions[currentStep]
  const currentAnswer = answers[currentQuestion.id as keyof Answer]

  function handleSelect(value: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
  }

  function handleNext() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1)
    } else {
      setShowResult(true)
    }
  }

  function handleBack() {
    if (currentStep > 0) setCurrentStep((s) => s - 1)
  }

  function handleReset() {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  const result = showResult ? getResult(answers as Answer) : null

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
            The Niche Finder Tool
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Answer 5 questions. Find your niching path, your niche formula, and your next step.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {!showResult ? (
            <div>
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500 font-medium shrink-0">
                  {currentStep + 1} of {totalSteps}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option) => (
                  <OptionButton
                    key={option.value}
                    label={option.label}
                    selected={currentAnswer === option.value}
                    onClick={() => handleSelect(option.value)}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:shadow-lg transition-shadow disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {currentStep === totalSteps - 1 ? 'See my results' : 'Next'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : result ? (
            <div>
              {/* Result header */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 mb-6">
                <p className="text-orange-100 text-sm font-semibold uppercase tracking-wide mb-2">
                  Your niching path
                </p>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {result.path}
                </h2>
                <p className="text-orange-100 leading-relaxed">
                  {result.pathDescription}
                </p>
              </div>

              {/* Formula */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Your niche formula
                </p>
                <pre className="text-sm text-gray-800 font-medium whitespace-pre-wrap leading-relaxed">
                  {result.formula}
                </pre>
              </div>

              {/* Niche size */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Your niche size target
                </p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {result.nicheSize}
                </p>
              </div>

              {/* Next step */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Your next step
                </p>
                <Link
                  href={result.nextStepHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:shadow-lg transition-shadow"
                >
                  {result.nextStep}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Reset */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start again
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}

