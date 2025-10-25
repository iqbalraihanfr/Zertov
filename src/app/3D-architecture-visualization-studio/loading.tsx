export default function ArchvizLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Skeleton */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Skeleton */}
            <div className="w-32 h-8 bg-gray-700 rounded animate-pulse"></div>
            
            {/* Navigation Skeleton */}
            <div className="hidden md:flex space-x-8">
              <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-700 rounded animate-pulse"></div>
            </div>
            
            {/* CTA Button Skeleton */}
            <div className="w-28 h-10 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main Title Skeleton */}
          <div className="w-96 h-16 bg-gray-700 rounded-lg mx-auto mb-6 animate-pulse"></div>
          
          {/* Subtitle Skeleton */}
          <div className="w-80 h-6 bg-gray-700 rounded mx-auto mb-8 animate-pulse"></div>
          
          {/* CTA Buttons Skeleton */}
          <div className="flex justify-center space-x-4">
            <div className="w-32 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="w-28 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section Skeleton */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-64 h-8 bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-6 bg-gray-700 rounded mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
                <div className="w-32 h-5 bg-gray-700 rounded mb-3 animate-pulse"></div>
                <div className="w-full h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo Marquee Skeleton */}
      <div className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-24 h-12 bg-gray-700 rounded animate-pulse flex-shrink-0"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section Skeleton */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-48 h-8 bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-64 h-6 bg-gray-700 rounded mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-8">
                <div className="w-24 h-6 bg-gray-700 rounded mb-4 animate-pulse"></div>
                <div className="w-32 h-8 bg-gray-700 rounded mb-6 animate-pulse"></div>
                <div className="space-y-3 mb-8">
                  <div className="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-5/6 h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-4/5 h-4 bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div className="w-full h-12 bg-gray-700 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-black py-12">
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
