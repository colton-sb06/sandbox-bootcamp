import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            See How Today's Money Decisions Change Your Next 90 Days
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Upload your financial statements and explore "what if" scenarios to understand how small changes
            can dramatically impact your financial future.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Example Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Save $300/month</h3>
            <p className="text-gray-600 mb-4">
              See how redirecting $300 from discretionary spending could grow your savings by $9,000 over 90 days.
            </p>
            <div className="text-green-600 font-semibold">+$9,000 potential savings</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Cancel unused subscriptions</h3>
            <p className="text-gray-600 mb-4">
              Identify and eliminate $150 in monthly subscription waste to free up cash flow immediately.
            </p>
            <div className="text-green-600 font-semibold">+$150 monthly savings</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Extra debt payments</h3>
            <p className="text-gray-600 mb-4">
              Apply $200 extra toward debt each month and see how it accelerates your path to financial freedom.
            </p>
            <div className="text-green-600 font-semibold">-$2,400 debt reduction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to explore your financial future?
          </h2>
          <p className="text-gray-600 mb-8">
            Upload your statements and start creating scenarios in minutes.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Your Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}
