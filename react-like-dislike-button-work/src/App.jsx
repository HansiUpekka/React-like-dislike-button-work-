import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const totalRatings = likes + dislikes

  return (
    <div className="page">
      <h1 className="name">React with Vite is a lightweight setup for building modern React apps with fast development startup and instant hot module replacement. Vite uses native ES modules in the browser during development, so changes appear quickly without full rebuilds. It also provides a clean build pipeline for production using optimized bundling, making it a simple, speedy choice for small projects and scalable apps alike.</h1>
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
