import React from 'react'

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
  }

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    icon,
  }) => {
  return (
    <div className="rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#3EEAAE]/5">
        <div className="w-12 h-12 bg-[#3EEAAE]/10 rounded-xl flex items-center justify-center mb-4 text-[#3EEAAE]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
  )
}

export default FeatureCard