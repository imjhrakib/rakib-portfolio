import React from 'react'

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
      <div className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] bg-secondary/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
      <div
        className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-50 animate-float"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary rounded-full opacity-40 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-1 h-1 bg-secondary rounded-full opacity-60 animate-float"
        style={{ animationDelay: '4s' }}
      ></div>
    </div>
  )
}

export default BackgroundElements