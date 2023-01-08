import React, { useEffect } from 'react'

export default function Practice() {
    useEffect(()=>{
      const doc = document.querySelector(".karl");
     doc.innerHTML = "karl"
    }, [])
  return (
    <div className="karl">

    </div>
  )
}
