import Link from 'next/link';
import AccountCard from '@/components/AccountCard';
import {
  mockAccounts,
  mockRecurringItems,
  mockScenarios,
} from '@/lib/mock-finance-data';

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Dashboard() {
  const netWorth = mockAccounts.reduce(
    (total, account) => total + account.balance,
    0,
  );
  const projectedNetWorth = netWorth + 970;
  const monthlyIncome = mockRecurringItems
    .filter((item) => item.type === 'income')
    .reduce((total, item) => total + item.amount * 2, 0);
  const monthlyOutflow = mockRecurringItems
    .filter((item) => item.type !== 'income')
    .reduce((total, item) => total + item.amount, 0);

  return (
    <div className="min-h-screen bg-[#07110f] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-300">
              90-day money forecast
            </p>
            <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
              See what your money can do next.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              A clean snapshot of cash, savings, debt, and recurring bills using
              realistic mock data while we build the real simulator.
            </p>
          </div>
          <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-5">
            <p className="text-sm font-medium text-emerald-200">
              Projected 90-day net worth
            </p>
            <p className="mt-2 text-4xl font-bold text-emerald-200">
              {moneyFormatter.format(projectedNetWorth)}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Baseline projection before applying scenario changes.
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Upload Your Data</h2>
              <p className="mt-1 text-sm text-slate-400">
                CSV import will eventually replace the mock data below.
              </p>
            </div>
            <span className="w-fit rounded-md border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
              MVP input
            </span>
          </div>
          <div className="rounded-lg border border-dashed border-slate-600 bg-slate-950/50 p-8 text-center transition hover:border-emerald-300/60 hover:bg-slate-900/70">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-emerald-300"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mb-2 text-slate-300">
              Drop your CSV statements here, or click to browse
            </p>
            <p className="mb-5 text-sm text-slate-500">
              For now, the dashboard is powered by mock accounts and recurring
              items.
            </p>
            <button className="rounded-md bg-emerald-300 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-200">
              Choose Files
            </button>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {mockAccounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-slate-950/60 p-5">
            <p className="text-sm text-slate-500">Monthly income</p>
            <p className="mt-2 text-2xl font-bold text-sky-300">
              {moneyFormatter.format(monthlyIncome)}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/60 p-5">
            <p className="text-sm text-slate-500">Monthly outflow</p>
            <p className="mt-2 text-2xl font-bold text-rose-300">
              {moneyFormatter.format(monthlyOutflow)}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/60 p-5">
            <p className="text-sm text-slate-500">Net worth</p>
            <p className="mt-2 text-2xl font-bold text-emerald-300">
              {moneyFormatter.format(netWorth)}
            </p>
          </div>
        </div>

        <section className="mb-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Recurring Money Movement
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Bills, paychecks, transfers, and debt payments that shape the
                forecast.
              </p>
            </div>
            <Link
              href="/scenarios"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Build a scenario
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockRecurringItems.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-300/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.category}</p>
                  </div>
                  <span className="rounded-md border border-white/10 bg-slate-950/70 px-2 py-1 text-xs font-medium text-slate-300">
                    {item.frequency}
                  </span>
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-100">
                  {moneyFormatter.format(item.amount)}
                </p>
                <p className="text-sm capitalize text-slate-500">
                  {item.type.replace('-', ' ')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                90-Day Baseline Forecast
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                A placeholder for the chart we will build from the recurring data.
              </p>
            </div>
            <span className="w-fit rounded-md bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
              Next 3 months
            </span>
          </div>
          <div className="mb-5 rounded-lg border border-slate-800 bg-slate-950/70 p-6">
            <div className="relative h-56">
              <div className="absolute inset-x-0 top-0 border-t border-white/10" />
              <div className="absolute inset-x-0 top-1/3 border-t border-white/10" />
              <div className="absolute inset-x-0 top-2/3 border-t border-white/10" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10" />
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 640 220"
                role="img"
                aria-label="Projected net worth line chart over 90 days"
              >
                <path
                  d="M24 172 C120 154 160 150 232 132 C310 112 356 126 424 96 C498 64 552 78 616 44"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M24 182 C120 166 168 162 232 146 C310 130 360 136 424 116 C498 90 552 96 616 72"
                  fill="none"
                  stroke="#38bdf8"
                  strokeDasharray="10 10"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute bottom-3 left-0 right-0 grid grid-cols-4 text-xs font-medium text-slate-500">
                <span>Today</span>
                <span className="text-center">30 days</span>
                <span className="text-center">60 days</span>
                <span className="text-right">90 days</span>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              Net worth projection placeholder: baseline in blue, improved scenario in green.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4 text-center">
              <p className="text-2xl font-bold text-emerald-200">$2,890</p>
              <p className="text-sm text-slate-400">
                Projected checking in 90 days
              </p>
            </div>
            <div className="rounded-lg border border-sky-300/20 bg-sky-300/10 p-4 text-center">
              <p className="text-2xl font-bold text-sky-200">$9,420</p>
              <p className="text-sm text-slate-400">
                Projected savings in 90 days
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            {mockScenarios.length} starter scenarios ready
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Ready to test a change?
          </h3>
          <p className="mt-2 max-w-2xl text-slate-400">
            Compare the baseline against choices like canceling subscriptions,
            saving more, buying a car, or handling an income drop.
          </p>
          <Link
            href="/scenarios"
            className="mt-5 inline-block rounded-md bg-emerald-300 px-6 py-2 font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Explore Scenarios
          </Link>
        </div>
      </div>
    </div>
  );
}
