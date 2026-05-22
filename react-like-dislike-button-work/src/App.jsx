import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const totalRatings = likes + dislikes

  return (
    <div className="page">
      <h1 className="name">---Hansi Upekka Sithumini---</h1>
      <div className="controls">
        <button type="button" onClick={() => setLikes((count) => count + 1)}>
          Like ({likes})
        </button>
        <button type="button" onClick={() => setDislikes((count) => count + 1)}>
          Dislike ({dislikes})
        </button>
        <span className="total">Total Ratings: {totalRatings}</span>
      </div>
    </div>
  )
}

export default App
