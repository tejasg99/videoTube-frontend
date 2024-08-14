import { useState } from 'react'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] '>
     <Header />
    </div>
    </>
  )
}

export default App
