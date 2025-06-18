import React, { ReactElement } from "react";

type ChildrenType = {
  children: ReactElement | ReactElement[]
}
export default function Background({ children }: ChildrenType) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
     
      <div >
        {children}
      </div>
      {/* Reflejo base */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-fuchsia-500 to-transparent pointer-events-none opacity-100" />
    </div>

  );
}
