import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Home, AlertTriangle } from "lucide-react";

function NotFound() {
    const location = useLocation();
    useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          location.pathname
        );
      }, [location.pathname]);
  return (
    <div className="min-h-screen bg-[#0E0B1F] text-white flex items-center justify-center px-6">
      <div className="text-center bg-[#1A1832] border border-gray-800 rounded-xl p-12 max-w-md w-full">
        <div className="mb-8 flex justify-center">
          <AlertTriangle className="h-24 w-24 text-[#3EEAAE] opacity-80" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-white">
          404
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="space-y-4">
          <button 
            className="w-full bg-[#3EEAAE] hover:bg-[#3EEAAE]/90 text-black"
            type='button'
          >
            <Link to="/" className="flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound