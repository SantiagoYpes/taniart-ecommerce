import React, { ReactElement } from "react";

type ChildrenType = {
  children: ReactElement | ReactElement[]
}
export default function Background({ children }: ChildrenType) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">

      <div className="absolute top-0 w-full h-32 bg-fuchsia-500 opacity-20 blur-2xl" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Líneas horizontales cerca al rombo */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-2 bg-fuchsia-500 shadow-md" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-2 bg-fuchsia-500 shadow-md" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rotate-45 bg-fuchsia-200 opacity-98 shadow-[0_0_20px_5px_rgba(255,0,255,0.6)]" />
      {children}
      {/* Reflejo base */}
      <div className="absolute bottom-0 w-full h-25 bg-fuchsia-500 opacity-20 blur-2xl" />
    </div>
  );
}
