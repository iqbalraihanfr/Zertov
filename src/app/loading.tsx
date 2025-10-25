export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Skeleton */}
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
            
            {/* Navigation Skeleton */}
            <div className="hidden md:flex space-x-8">
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-14 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            {/* CTA Button Skeleton */}
            <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="w-96 h-12 bg-gray-200 rounded-lg mx-auto mb-6 animate-pulse"></div>
          <div className="w-80 h-6 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="w-48 h-12 bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
              <div className="w-32 h-5 bg-gray-200 rounded mb-3 animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* CTA Section Skeleton */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <div className="w-64 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-48 h-6 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="w-32 h-10 bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className="w-24 h-5 bg-gray-700 rounded mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-24 h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
