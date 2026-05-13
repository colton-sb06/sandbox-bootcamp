import Link from 'next/link';

const previewMetrics = [
  {
    label: 'Baseline net worth',
    value: '$8,000',
    detail: 'Today',
  },
  {
    label: 'Projected net worth',
    value: '$8,970',
    detail: '90 days',
  },
  {
    label: 'Scenario upside',
    value: '+$740',
    detail: 'With changes',
  },
];

const scenarioExamples = [
  {
    title: 'Save $300 more per month',
    description: 'See how a higher transfer changes savings and net worth.',
    impact: '+$900 projected net worth',
  },
  {
    title: 'Pay extra toward credit card debt',
    description: 'Compare lower debt against the cash needed today.',
    impact: '-$500 debt balance',
  },
  {
    title: 'Income drops temporarily',
    description: 'Stress-test the next few months before it happens.',
    impact: '-$1,680 projected income',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07110f] text-slate-100">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-300">
            MoneyMap scenario simulator
          </p>
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-6xl">
            MoneyMap your next move.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Build a 90-day forecast from your balances and recurring money
            movement, then compare how decisions could change account balances,
            debt, and net worth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-md bg-emerald-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              View Dashboard
            </Link>
            <Link
              href="/scenarios"
              className="rounded-md border border-white/10 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-sky-300/50 hover:bg-white/[0.04]"
            >
              Try Scenarios
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Forecast preview</p>
              <h2 className="mt-1 text-xl font-semibold text-white">
                Net worth over time
              </h2>
            </div>
            <span className="rounded-md bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
              90 days
            </span>
          </div>
          <div className="relative h-56 overflow-hidden rounded-lg border border-slate-800 bg-slate-950/70 p-4">
            <div className="absolute inset-x-4 top-12 border-t border-white/10" />
            <div className="absolute inset-x-4 top-24 border-t border-white/10" />
            <div className="absolute inset-x-4 top-36 border-t border-white/10" />
            <svg
              className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]"
              viewBox="0 0 520 180"
              role="img"
              aria-label="Net worth forecast line chart"
            >
              <path
                d="M8 152 L32 150 L56 148 L80 145 L104 141 L128 143 L152 138 L176 135 L200 130 L224 132 L248 126 L272 121 L296 116 L320 118 L344 111 L368 108 L392 101 L416 96 L440 98 L464 90 L488 82 L512 76"
                fill="none"
                stroke="#34d399"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                className="forecast-line forecast-line-primary"
              />
              <path
                d="M8 152 L32 151 L56 149 L80 148 L104 145 L128 146 L152 143 L176 141 L200 138 L224 139 L248 135 L272 132 L296 128 L320 130 L344 126 L368 123 L392 119 L416 116 L440 118 L464 113 L488 108 L512 104"
                fill="none"
                stroke="#38bdf8"
                strokeDasharray="9 9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="forecast-line forecast-line-secondary"
              />
            </svg>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              No-change forecast
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
              Scenario-based future
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {previewMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-slate-950/60 p-4"
              >
                <p className="text-xs text-slate-500">{metric.label}</p>
                <p className="mt-1 text-xl font-bold text-white">{metric.value}</p>
                <p className="text-xs text-slate-500">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">
            Scenario levers
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Start with simple changes that clearly affect future balances.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {scenarioExamples.map((scenario) => (
            <article
              key={scenario.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-300/40 hover:bg-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-white">
                {scenario.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {scenario.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-300">
                {scenario.impact}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
