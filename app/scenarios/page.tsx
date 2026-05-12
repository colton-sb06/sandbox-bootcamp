import Link from 'next/link';

export default function Scenarios() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Scenarios</h1>
              <p className="text-gray-600">Explore "what if" changes and see how they affect your future</p>
            </div>
            <Link
              href="/dashboard"
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Scenario Builder */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Create a New Scenario</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Scenario Type</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Save more money</option>
                <option>Reduce expenses</option>
                <option>Increase income</option>
                <option>Add debt payment</option>
                <option>Custom change</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                placeholder="300"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Create Scenario
          </button>
        </div>

        {/* Preset Scenarios */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer">
              <h3 className="font-medium text-gray-900 mb-2">Save $300/month</h3>
              <p className="text-sm text-gray-600 mb-3">Add automatic savings transfer</p>
              <div className="text-green-600 font-medium">+$2,100 in savings</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer">
              <h3 className="font-medium text-gray-900 mb-2">Cancel subscriptions</h3>
              <p className="text-sm text-gray-600 mb-3">Remove Netflix, Spotify, gym</p>
              <div className="text-green-600 font-medium">+$180/month surplus</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer">
              <h3 className="font-medium text-gray-900 mb-2">Pay $500 extra to credit card</h3>
              <p className="text-sm text-gray-600 mb-3">Accelerate debt payoff</p>
              <div className="text-green-600 font-medium">-$500 debt in 90 days</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer">
              <h3 className="font-medium text-gray-900 mb-2">Cut dining out by 30%</h3>
              <p className="text-sm text-gray-600 mb-3">Reduce restaurant spending</p>
              <div className="text-green-600 font-medium">+$90/month surplus</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer">
              <h3 className="font-medium text-gray-900 mb-2">Buy a car ($450/month)</h3>
              <p className="text-sm text-gray-600 mb-3">Add car payment and costs</p>
              <div className="text-red-600 font-medium">-$450/month deficit</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer">
              <h3 className="font-medium text-gray-900 mb-2">Income drops 20%</h3>
              <p className="text-sm text-gray-600 mb-3">Temporary income reduction</p>
              <div className="text-red-600 font-medium">-$840/month impact</div>
            </div>
          </div>
        </div>

        {/* Comparison View */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Scenario Comparison</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600">Select scenarios above to compare them side-by-side</p>
            <p className="text-sm text-gray-500 mt-2">Charts will show baseline vs. scenario projections</p>
          </div>
        </div>
      </div>
    </div>
  );
}