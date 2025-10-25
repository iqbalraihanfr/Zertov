export default function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar Skeleton */}
        <div className="mb-8">
          <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
            <div className="w-1/3 h-2 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form Skeleton */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <div className="w-48 h-8 bg-gray-200 rounded animate-pulse"></div>
            </h2>
            
            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <div className="w-20 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              <div>
                <div className="w-24 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="w-16 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
                <div>
                  <div className="w-20 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
              <div>
                <div className="w-28 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Order Summary Skeleton */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
            </h3>
            
            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex-1">
                    <div className="w-32 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <div className="w-20 h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-24 h-5 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="mt-6">
              <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
