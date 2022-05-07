import { useState } from 'react'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="container">
      <div className="children">
        1
      </div>
      <div className="children">
        2
      </div>
      <div className="children">
        3
      </div>
      <div className="children">
        4
      </div>
      <div className="children">
        5
      </div>
      <div className="children">
        6
      </div>
    </section>
  )
}

export default App
