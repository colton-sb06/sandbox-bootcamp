type SummaryMetricCardProps = {
  label: string;
  value: string;
  tone: 'sky' | 'rose' | 'emerald';
};

const toneClassNames = {
  sky: 'text-sky-300',
  rose: 'text-rose-300',
  emerald: 'text-emerald-300',
};

export default function SummaryMetricCard({
  label,
  value,
  tone,
}: SummaryMetricCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/60 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={`mt-2 text-2xl font-bold ${toneClassNames[tone]}`}>
        {value}
      </p>
    </div>
  );
}
