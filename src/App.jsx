import Layout from './components/Layout'
import { useState } from 'react'
import Footer from './components/Footer';

function App() {
  const [font, setFont] = useState('Arial')
  return (
    <div className='main' style={{ fontFamily: font }}>
      <Layout setFont={setFont} />
    </div>
  )
}

export default App
