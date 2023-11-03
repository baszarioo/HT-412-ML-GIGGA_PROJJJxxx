// import React from 'react'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    let color= "bg-slate-700"
    // switch 
  }
  return (
    // <div>StatusDisplay</div>
    <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200">
        {/* done */}
        {status}
    </span>
  )
}

export default StatusDisplay