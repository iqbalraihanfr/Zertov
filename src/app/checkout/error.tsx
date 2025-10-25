'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Home, RefreshCw, CreditCard } from 'lucide-react'

export default function CheckoutError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <CreditCard className="w-8 h-8 text-red-600" />
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Checkout Error
        </h1>
        <p className="text-gray-600 mb-8">
          We encountered an issue processing your order. Your payment has not been charged.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-gray-700 font-mono">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={reset}
            className="w-full bg-black hover:bg-gray-800 text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Checkout Again
          </Button>
          
          <Link href="/">
            <Button 
              variant="outline" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Support Information */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 mb-2">
            <strong>Need help?</strong>
          </p>
          <p className="text-sm text-blue-700">
            If this problem persists, please contact our support team at{' '}
            <a href="mailto:support@zertov.com" className="underline">
              support@zertov.com
            </a>
          </p>
        </div>

        {/* Security Notice */}
        <div className="mt-6 p-3 bg-green-50 rounded-lg">
          <p className="text-xs text-green-700">
            <strong>Security Notice:</strong> Your payment information is secure and encrypted. 
            No charges have been made to your account.
          </p>
        </div>
      </div>
    </div>
  )
}
