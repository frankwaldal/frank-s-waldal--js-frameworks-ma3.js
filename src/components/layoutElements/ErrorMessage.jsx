import React from 'react';

export default function ErrorMessage({ children }) {
  return (
    <p style={{color: '#872737'}}>
      {children}
    </p>
  )
}
