

function ProblemSolve() {
  return (
    <div className="min-h-screen bg-[#0E0B1F] text-white flex ">
      <div className="bg-[#1A1832] border border-gray-800 rounded-xl p-12 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-white">Ask Your Question</h1>
        <p className="text-gray-400 mb-6">Enter your math problem below:</p>
        <textarea
          rows={4}          
          placeholder="Type your math problem here..."
          className="w-full bg-[#2A2638] border border-gray-700 rounded-lg p-4 mb-4 text-white focus:outline-none focus:ring-2 focus:ring-[#3EEAAE]"
        />
        <button 
          className="w-full bg-[#3EEAAE] hover:bg-[#3EEAAE]/90 text-black py-2 rounded-lg"
          type='button'
        >
          Solve
        </button>
      </div>
      <div className="mt-6 text-gray-400 text-sm mx-8">
        <p>Note: This is a placeholder for the problem-solving functionality.</p>
        <p>In a real application, you would implement the logic to solve the math problem here.</p>
        </div>
    </div>
  )
}

export default ProblemSolve;