type MoneyMapLogoProps = {
  size?: 'sm' | 'md';
};

export default function MoneyMapLogo({ size = 'md' }: MoneyMapLogoProps) {
  const boxSize = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8';

  return (
    <span
      className={`${boxSize} inline-flex items-center justify-center rounded-sm border border-emerald-300/30 bg-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M5 7h6v4H5zM13 7h6v4h-6zM5 13h6v4H5zM13 13h6v4h-6z"
          className="fill-emerald-300/20"
        />
        <path
          d="M6 16h4v-4h4V8h4"
          fill="none"
          className="stroke-emerald-300"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2.4"
        />
        <path
          d="M14.5 14.5l3 3M17.5 14.5l-3 3"
          fill="none"
          className="stroke-sky-300"
          strokeLinecap="square"
          strokeWidth="1.9"
        />
      </svg>
    </span>
  );
}
