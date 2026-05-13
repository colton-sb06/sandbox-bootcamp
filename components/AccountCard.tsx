import type { Account } from '@/lib/mock-finance-data';

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

type AccountCardProps = {
  account: Account;
};

export default function AccountCard({ account }: AccountCardProps) {
  const isDebt = account.type === 'credit-card';
  const balanceColor = isDebt ? 'text-rose-300' : 'text-emerald-300';
  const typeLabel = account.type.replace('-', ' ');

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/[0.06]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {typeLabel}
          </p>
          <h3 className="mt-1 text-base font-semibold text-white">
            {account.name}
          </h3>
        </div>
        <span className="rounded-md border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs font-medium text-slate-300">
          {isDebt ? 'Debt' : 'Asset'}
        </span>
      </div>
      <p className={`text-3xl font-bold ${balanceColor}`}>
        {moneyFormatter.format(account.balance)}
      </p>
    </article>
  );
}
