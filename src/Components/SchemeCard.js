import React from 'react'

function SchemeCard({scheme}) {
    const {SchemeName , Objective,Eligibility , Benefit} = scheme;
  return (
    <div className="border rounded-lg shadow-md bg-white mb-4">
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-blue-700">{SchemeName}</h1>
      <div className="flex flex-wrap mb-2">
        <div className="w-full md:w-1/2">
          <p className="text-sm"><strong>Objective:</strong> {Objective}</p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm"><strong>Eligibility:</strong> {Eligibility}</p>
        </div>
      </div>
      <div>
        <p className="text-sm"><strong>Benefit:</strong> {Benefit}</p>
      </div>
    </div>
  </div>

  )
}

export default SchemeCard