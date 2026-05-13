import Link from 'next/link';
import MoneyMapLogo from './MoneyMapLogo';

export default function Navigation() {
  return (
    <nav className="border-b border-white/10 bg-[#07110f]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <MoneyMapLogo />
              MoneyMap
            </Link>
          </div>

          <div className="flex gap-2 sm:gap-4">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-emerald-300"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-emerald-300"
            >
              Dashboard
            </Link>
            <Link
              href="/scenarios"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-emerald-300"
            >
              Scenarios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
