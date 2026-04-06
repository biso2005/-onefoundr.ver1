import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'The Niche Formula Library — OneFoundr',
  description:
    'The right niche formula for every business type — with real examples, fill-in-the-blank templates, and the most common mistakes to avoid.',
}

const formulas = [
  {
    id: 'services',
    category: 'Services',
    formula: 'Skill + Audience + Pain = Niche',
    components: [
      { name: 'Skill', description: 'The specific thing you do — not a broad discipline but a precise capability.' },
      { name: 'Audience', description: 'The specific group of people you do it for — defined by industry, role, or situation.' },
      { name: 'Pain', description: 'The specific problem they have that your skill solves — not a general challenge but a felt frustration.' },
    ],
    template: '"I do [SKILL] for [AUDIENCE] who struggle with [PAIN]"',
    examples: [
      'I write email sequences for SaaS companies who struggle to convert free trials into paying customers.',
      'I do bookkeeping for independent personal trainers who have no idea where their money is going.',
      'I build Webflow sites for independent therapists who look unprofessional online and are losing clients because of it.',
    ],
    mistakes: [
      'Defining your skill too broadly — "marketing" instead of "LinkedIn content".',
      'Defining your audience by size instead of type — "small businesses" is not an audience.',
      'Describing a general challenge instead of a felt pain — "growth" is not a pain point.',
    ],
  },
  {
    id: 'physical',
    category: 'Physical Products',
    formula: 'Product + Aesthetic + Lifestyle = Niche',
    components: [
      { name: 'Product', description: 'What you make or source — specific enough that someone can picture it.' },
      { name: 'Aesthetic', description: 'The visual and sensory language of your brand — the feeling it creates.' },
      { name: 'Lifestyle', description: 'The identity and values of your buyer — how they see themselves and want to be seen.' },
    ],
    template: '"I make [PRODUCT] with a [AESTHETIC] feel for people who live [LIFESTYLE]"',
    examples: [
      'I make soy candles with a minimal Scandinavian feel for people who live intentionally and buy less but better.',
      'I source vintage workwear with a worn-in American aesthetic for people who dress for durability not trends.',
      'I make hot sauce with a bold Caribbean feel for people who grew up eating heat and miss the real thing.',
    ],
    mistakes: [
      'Skipping the aesthetic — your product becomes a commodity without a visual identity.',
      'Defining lifestyle too vaguely — "people who love the outdoors" covers too much ground.',
      'Choosing an aesthetic that does not match your actual buyer — style for its own sake.',
    ],
  },
  {
    id: 'digital',
    category: 'Digital Products',
    formula: 'Solution + Specific User + Specific Situation = Niche',
    components: [
      { name: 'Solution', description: 'The specific output your product creates — what someone has after buying it.' },
      { name: 'Specific User', description: 'The exact person who needs this — defined by role, experience level, or context.' },
      { name: 'Specific Situation', description: 'The moment they need it — the trigger that makes them search for it.' },
    ],
    template: '"I created [SOLUTION] for [SPECIFIC USER] who are dealing with [SPECIFIC SITUATION]"',
    examples: [
      'I created a client onboarding Notion template for freelance designers who just landed their first retainer client.',
      'I created a pricing calculator spreadsheet for independent consultants who keep undercharging and do not know by how much.',
      'I created a content repurposing system for solo founders who have no time to post consistently across multiple platforms.',
    ],
    mistakes: [
      'Building a solution before confirming the specific user actually wants it.',
      'Describing the situation too broadly — "busy professionals" is a user type, not a situation.',
      'Making the solution too generic — templates that work for everyone work exceptionally well for nobody.',
    ],
  },
  {
    id: 'knowledge',
    category: 'Knowledge & Education',
    formula: 'Expertise + Transformation + Specific Audience = Niche',
    components: [
      { name: 'Expertise', description: 'The domain you have genuine, provable knowledge in — ideally from doing it yourself.' },
      { name: 'Transformation', description: 'The before and after — what someone can do or has after working with you.' },
      { name: 'Specific Audience', description: 'The exact person this transformation is for — not everyone who could benefit but the person it fits best.' },
    ],
    template: '"I help [SPECIFIC AUDIENCE] go from [BEFORE] to [AFTER] using my knowledge of [EXPERTISE]"',
    examples: [
      'I help newly qualified accountants go from employed to running their first five clients using my knowledge of solo practice setup.',
      'I help independent coffee shop owners go from losing money on labour to profitable rotas using my knowledge of hospitality operations.',
      'I help first-time managers go from avoiding difficult conversations to handling them confidently using my knowledge of workplace psychology.',
    ],
    mistakes: [
      'Claiming expertise you have studied but not lived — buyers can tell.',
      'Describing a vague transformation — "reach your potential" is not a before and after.',
      'Targeting too broadly — "entrepreneurs" when you mean "first-time service business owners under £100K revenue".',
    ],
  },
  {
    id: 'content',
    category: 'Content & Media',
    formula: 'Topic + Unique Perspective + Specific Audience = Niche',
    components: [
      { name: 'Topic', description: 'The subject matter you cover — specific enough to be findable, broad enough to have years of content in it.' },
      { name: 'Unique Perspective', description: 'The angle only you can bring — your contrarian view, your lived experience, your unusual background.' },
      { name: 'Specific Audience', description: 'The exact reader or viewer this is for — not a demographic but a mindset or situation.' },
    ],
    template: '"I create [TOPIC] content from a [UNIQUE PERSPECTIVE] angle for [SPECIFIC AUDIENCE]"',
    examples: [
      'I create personal finance content from a first-generation wealth angle for people whose parents never talked about money.',
      'I create business strategy content from a solo operator perspective for founders who are done with advice written for teams.',
      'I create career content from a late bloomer angle for professionals who are switching industries after 35 and feel behind.',
    ],
    mistakes: [
      'Choosing a topic without a perspective — you become one of thousands covering the same ground.',
      'Picking a perspective that is not genuinely yours — readers feel the performance.',
      'Defining your audience by age or income instead of mindset or situation.',
    ],
  },
  {
    id: 'saas',
    category: 'SaaS & Software',
    formula: 'Technical Insight + Underserved Market = Niche',
    components: [
      { name: 'Technical Insight', description: 'The specific problem you can see that others cannot — usually from having worked inside the problem.' },
      { name: 'Underserved Market', description: 'The group of people for whom existing tools are too expensive, too complex, or completely absent.' },
    ],
    template:
      '"I noticed that [EXISTING TOOLS] do not solve [SPECIFIC PROBLEM] for [UNDERSERVED MARKET] so I built [YOUR TOOL]"',
    examples: [
      'I noticed that project management tools do not solve async client approval for solo video editors so I built a lightweight review tool.',
      'I noticed that email marketing platforms do not solve deliverability monitoring for small newsletter operators so I built a simple inbox checker.',
      'I noticed that invoicing software does not solve retainer tracking for independent consultants so I built a retainer dashboard.',
    ],
    mistakes: [
      'Building for a market that is underserved because it is too small to be worth serving.',
      'Solving a problem people have but will not pay to fix — friction and willingness to pay are different things.',
      'Competing with a large tool on features instead of finding the gap they have left unserved.',
    ],
  },
  {
    id: 'community',
    category: 'Community',
    formula: 'Identity + Shared Experience + Unmet Need = Niche',
    components: [
      { name: 'Identity', description: 'Who these people are — the label they give themselves or the group they belong to.' },
      { name: 'Shared Experience', description: 'What they have all been through — the common thread that creates instant recognition and belonging.' },
      { name: 'Unmet Need', description: 'What they cannot find anywhere else — the thing they would pay for if it existed.' },
    ],
    template:
      '"I built a community for [IDENTITY] who have experienced [SHARED EXPERIENCE] and need [UNMET NEED] that does not exist anywhere else"',
    examples: [
      'I built a community for solo founders who have left corporate careers and need honest peer support that is not available in mainstream startup circles.',
      'I built a community for freelance developers who have burned out on agency life and need a space to talk about sustainability without being judged.',
      'I built a community for women in their 40s who left long-term relationships and need practical and emotional support from people who actually get it.',
    ],
    mistakes: [
      'Building around a topic instead of an identity — topics create audiences, identities create communities.',
      'Underestimating how hard it is to create the feeling of belonging — platform choice is the least important decision.',
      'Trying to monetise before the community has enough members to feel alive.',
    ],
  },
]

export default function NicheFormulaLibraryPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/start/niche-selection"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Niche Selection</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Reference Library</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Niche Formula Library
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl">
            Every business type has a different niche formula. Find yours, fill in the blanks, and avoid the mistakes that make most niches too vague to work.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="border-b border-gray-100 bg-gray-50 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {formulas.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-600 transition-colors"
              >
                {f.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulas */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {formulas.map((f) => (
            <div key={f.id} id={f.id} className="scroll-mt-20">

              {/* Category header */}
              <div className="mb-8">
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-2">
                  {f.category}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {f.formula}
                </h2>
                {/* Template */}
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-6 py-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Fill-in-the-blank template
                  </p>
                  <p className="text-base font-semibold text-orange-700">
                    {f.template}
                  </p>
                </div>
              </div>

              {/* Components */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  What each part means
                </h3>
                <div className="space-y-3">
                  {f.components.map((c) => (
                    <div
                      key={c.name}
                      className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4"
                    >
                      <span className="text-sm font-bold text-orange-500 w-28 shrink-0">
                        {c.name}
                      </span>
                      <p className="text-sm text-gray-600">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Real examples
                </h3>
                <div className="space-y-3">
                  {f.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex gap-3 bg-gray-50 rounded-xl p-4"
                    >
                      <span className="text-orange-300 font-bold text-sm shrink-0 w-5">
                        {i + 1}.
                      </span>
                      <p className="text-sm text-gray-700 italic">{example}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mistakes */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Common mistakes
                </h3>
                <div className="space-y-2">
                  {f.mistakes.map((mistake, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-red-400 font-bold text-sm shrink-0 mt-0.5">✕</span>
                      <p className="text-sm text-gray-600">{mistake}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {f.id !== 'community' && (
                <div className="border-b border-gray-100 mt-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-sm text-gray-500 mb-2">
                Not sure which formula is yours?
              </p>
              <Link
                href="/start/niche-selection/niche-finder"
                className="inline-flex items-center gap-2 font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Take the Niche Finder Tool
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-sm text-gray-500 mb-2">
                Ready to check if your niche is big enough?
              </p>
              <Link
                href="/start/niche-selection/niche-size-calculator"
                className="inline-flex items-center gap-2 font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Use the Niche Size Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}

