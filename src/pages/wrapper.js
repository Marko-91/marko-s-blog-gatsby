import React from 'react'

const Wrapper = ({ children }) => {
    return (
      <div>
        <h2>Ovo dolazi iz omotaca</h2>
        { children }
      </div>
    )
  }

export default Wrapper