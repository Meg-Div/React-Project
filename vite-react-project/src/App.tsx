import reactLogo from './assets/react.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './state/Hooks'
import { increment } from './state/CounterSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { NavBar } from './components/NavBar'
import { Artists } from './components/pages/Artists'
import { Picks } from './components/pages/Picks'
import { Collections } from './components/pages/Collections'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Counter/>} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/picks" element={<Picks />} />
      <Route path="/collections" element={<Collections />} />
    </Routes>
    </>
  )
}

export default App

function Counter() {

const count = useAppSelector(s=> s.counter.value)
const dispatch = useAppDispatch();
const onIncrement = () => dispatch(increment())

return (
  <div className="App">
    <div className="card">
      <button onClick={onIncrement}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </div>
)
}
