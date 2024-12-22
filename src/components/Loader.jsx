import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid border-opacity-75"></div>
  </div>
  )
}
