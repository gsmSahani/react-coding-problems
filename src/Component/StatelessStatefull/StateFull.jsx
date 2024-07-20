import React, { useState } from 'react'

const StateFull = () => {
    const [name,setName] = useState("Gautams")
  return (
    <>
    <div>
    <h1>{name}</h1>
    </div>
    </>
  )
}

export default StateFull
// statefull === with state