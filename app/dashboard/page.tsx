export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Financial Dashboard</h1>
          <p className="text-gray-600">Upload your statements to see your baseline forecast</p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload Your Data</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-gray-600 mb-2">Drop your CSV statements here, or click to browse</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Choose Files
            </button>
          </div>
        </div>

        {/* Current Balances Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Checking Balance</h3>
            <p className="text-2xl font-bold text-green-600">$2,450.00</p>
            <p className="text-sm text-gray-500">Available to spend</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Savings Balance</h3>
            <p className="text-2xl font-bold text-blue-600">$8,750.00</p>
            <p className="text-sm text-gray-500">Emergency fund</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Monthly Income</h3>
            <p className="text-2xl font-bold text-purple-600">$4,200.00</p>
            <p className="text-sm text-gray-500">After taxes</p>
          </div>
        </div>

        {/* Baseline Forecast Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">90-Day Baseline Forecast</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center mb-4">
            <p className="text-gray-600">Forecast chart will appear here after uploading data</p>
            <p className="text-sm text-gray-500 mt-2">Shows your projected checking, savings, and debt balances</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">$2,890</p>
              <p className="text-sm text-gray-600">Projected checking in 90 days</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">$9,420</p>
              <p className="text-sm text-gray-600">Projected savings in 90 days</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">Ready to explore scenarios?</h3>
          <p className="text-blue-700 mb-4">See how different changes could affect your financial future</p>
          <a href="/scenarios" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 inline-block">
            Explore Scenarios →
          </a>
        </div>
      </div>
    </div>
  );
}