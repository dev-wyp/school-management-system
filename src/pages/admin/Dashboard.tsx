import React, { useState } from 'react'

const Dashboard = () => {
  const [ yes, setYes] = useState('true')
  return (
    <div>Admin Dashboard {yes}</div>
  )
}

export default Dashboard