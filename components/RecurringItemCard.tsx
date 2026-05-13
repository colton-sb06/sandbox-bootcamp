import type { RecurringItem } from '@/lib/mock-finance-data';

type RecurringItemCardProps = {
  item: RecurringItem;
  formattedAmount: string;
};

export default function RecurringItemCard({
  item,
  formattedAmount,
}: RecurringItemCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-300/40 hover:bg-white/[0.06]">
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
        {formattedAmount}
      </p>
      <p className="text-sm capitalize text-slate-500">
        {item.type.replace('-', ' ')}
      </p>
    </article>
  );
}
