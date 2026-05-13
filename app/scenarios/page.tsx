import Link from 'next/link';
import { mockScenarios } from '@/lib/mock-finance-data';

const scenarioSummaries = [
  '+$900 savings change',
  '+$450 fewer recurring costs',
  '-$500 credit card balance',
  '+$270 dining reduction',
  '-$1,350 transportation cost',
  '-$1,680 temporary income loss',
];

export default function Scenarios() {
  return (
    <div className="min-h-screen bg-[#07110f] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Scenario levers
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Change an assumption. Compare the future.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Pick a preset or create a simple change, then compare the baseline
              forecast against a possible path for net worth and account balances.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="w-fit rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-300/50 hover:bg-white/[0.04]"
          >
            Back to Dashboard
          </Link>
        </div>

        <section className="mb-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              Create a New Scenario
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              This form is still static, but it shows the inputs the scenario
              engine will eventually use.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Scenario Type
              </label>
              <select className="w-full rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none transition focus:border-emerald-300/70">
                <option>Save more money</option>
                <option>Reduce expenses</option>
                <option>Increase income</option>
                <option>Add debt payment</option>
                <option>Custom change</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Monthly Amount
              </label>
              <input
                type="number"
                placeholder="300"
                className="w-full rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-emerald-300/70"
              />
            </div>
          </div>
          <button className="mt-5 rounded-md bg-emerald-300 px-6 py-2 font-semibold text-slate-950 transition hover:bg-emerald-200">
            Create Scenario
          </button>
        </section>

        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white">
              Quick Scenarios
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Presets keep the MVP understandable while we build the real engine.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockScenarios.map((scenario, index) => {
              const isNegative = scenario.monthlyImpact < 0;

              return (
                <article
                  key={scenario.id}
                  className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-white">{scenario.name}</h3>
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-semibold ${
                        isNegative
                          ? 'bg-rose-300/10 text-rose-200'
                          : 'bg-emerald-300/10 text-emerald-200'
                      }`}
                    >
                      {isNegative ? 'Cost' : 'Lift'}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    {scenario.description}
                  </p>
                  <p
                    className={`mt-4 text-sm font-semibold ${
                      isNegative ? 'text-rose-300' : 'text-emerald-300'
                    }`}
                  >
                    {scenarioSummaries[index]}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Baseline vs. Scenario
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Placeholder comparison for future net worth over 30, 60, and 90
                days.
              </p>
            </div>
            <span className="w-fit rounded-md bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
              Comparison view
            </span>
          </div>
          <div className="relative h-64 rounded-lg border border-slate-800 bg-slate-950/70 p-6">
            <div className="absolute inset-x-6 top-12 border-t border-white/10" />
            <div className="absolute inset-x-6 top-28 border-t border-white/10" />
            <div className="absolute inset-x-6 top-44 border-t border-white/10" />
            <svg
              className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]"
              viewBox="0 0 640 220"
              role="img"
              aria-label="Baseline and scenario net worth comparison chart"
            >
              <path
                d="M24 178 C118 160 170 154 240 134 C318 114 368 122 438 96 C514 70 566 78 616 58"
                fill="none"
                stroke="#38bdf8"
                strokeDasharray="10 10"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <path
                d="M24 168 C118 144 170 134 240 106 C318 74 368 88 438 58 C514 30 566 34 616 18"
                fill="none"
                stroke="#34d399"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>
            <div className="absolute bottom-4 left-6 right-6 grid grid-cols-4 text-xs font-medium text-slate-500">
              <span>Today</span>
              <span className="text-center">30 days</span>
              <span className="text-center">60 days</span>
              <span className="text-right">90 days</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
