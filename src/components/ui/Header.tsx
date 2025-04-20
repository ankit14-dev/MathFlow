import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
  return (
    <header className="w-full py-4 px-6 fixed top-0 z-50 bg-[#0E0B1F]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3EEAAE] to-[#3EE8EA] flex items-center justify-center">
            <span className="text-black font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-xl text-white">MathFlow</span>
        </Link>
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/solve" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Solve Problem
              </Link>
              <Link to="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Examples
              </Link>
              <Link to="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </nav>
            <Button className="bg-[#3EEAAE] text-black hover:bg-[#3EEAAE]/90">
              Get Started
            </Button>
          </div>
        
      </div>
    </header>
  )
}

export default Header