import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h1>Felipe Moreira Salas, M.S.</h1>
          <div className="text-3xl font-bold underline">
              Hello world!
          </div>
          <div>
              <a target="_blank">
                  <img src='../assets/picture.JPG' className="logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src='../assets/picture.JPG' className="logo react" alt="React logo"/>
              </a>
          </div>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
