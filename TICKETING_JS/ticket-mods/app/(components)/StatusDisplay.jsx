// import React from 'react'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    let color;
    // switch (status.toLowerCase()){
      if(status) {
        switch (status.toLowerCase()) {
          case "done":
            color: "bg-green-200";
            break;
          case "started":
            color: "bg-yellow-200";
            break;
          case "not started":
            color: "bg-red-200";
            break;
        }
      }
    return color;
  };
  return (
    // <div>StatusDisplay</div>
    // <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200">
    <span className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
        {/* done */}
        {status}
    </span>
  )
}

export default StatusDisplay