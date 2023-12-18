import { useState } from 'react'

const Dashboard = () => {
  const [ yes, _setYes] = useState('true')
  return (
    <div>Admin Dashboard {yes}</div>
  )
}

export default Dashboard