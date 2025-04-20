import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/ui/Header'
import Button from '../components/ui/Button'
import FeatureCard from './FeatureCard'
import { BookOpen, Lightbulb, Play } from 'lucide-react'

function Index() {
  return (
    <div className="min-h-screen bg-[#0E0B1F] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Math Learning That<br />
            <span className="bg-gradient-to-r from-[#3EEAAE] to-[#3EE8EA] bg-clip-text text-transparent">
              Exceeds Expectations
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-10">
            Transform mathematical problems into animated solutions. Learn through visual step-by-step explanations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#3EEAAE] hover:bg-[#3EEAAE]/90 text-black"
              asChild
            >
              <Link to="/solve">
                Get started for free
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-700 hover:bg-gray-800"
              asChild
            >
              <Link to="#">Watch demo</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6 bg-[#12102A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to master mathematics through visual learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Step-by-Step Animations"
              description="Watch solutions unfold with clear, animated steps that break down complex problems."
              icon={<Play className="h-6 w-6" />}
              className="bg-[#1A1832] border-gray-800"
            />
            <FeatureCard
              title="Visual Learning"
              description="Convert abstract concepts into visual representations for better understanding."
              icon={<BookOpen className="h-6 w-6" />}
              className="bg-[#1A1832] border-gray-800"
            />
            <FeatureCard
              title="Smart Solutions"
              description="Get instant solutions powered by advanced algorithms and AI technology."
              icon={<Lightbulb className="h-6 w-6" />}
              className="bg-[#1A1832] border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A1832] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Learning Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Problems Solved</span>
                  <div className="flex items-center">
                    <div className="h-2 w-32 bg-[#3EEAAE]/20 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-[#3EEAAE] rounded-full"></div>
                    </div>
                    <span className="ml-3">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Understanding Rate</span>
                  <div className="flex items-center">
                    <div className="h-2 w-32 bg-[#3EE8EA]/20 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-[#3EE8EA] rounded-full"></div>
                    </div>
                    <span className="ml-3">92%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1A1832] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Study Progress</h3>
              <div className="relative h-48">
                {/* Placeholder for chart - you can integrate Recharts here */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Chart visualization will be displayed here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#12102A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform How You Learn Math?</h2>
          <p className="text-xl mb-8 text-gray-400">
            Join thousands of students who are mastering mathematics through visual, animated learning.
          </p>
          <Button 
            size="lg" 
            className="bg-[#3EEAAE] hover:bg-[#3EEAAE]/90 text-black"
            asChild
          >
            <Link to="/solve">Start Solving Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-math-primary to-math-highlight flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-lg">MathFlow</span>
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MathFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index