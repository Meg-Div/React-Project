import './App.css'
import { useAppDispatch, useAppSelector } from './state/Hooks'
import { increment } from './state/CounterSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Cart } from './components/pages/Cart'
import { Picks } from './components/pages/Picks'
import { Collection } from './components/pages/Collection'
import { SecondHome } from './components/pages/SecondHome'
import { ProductDetails } from './components/content/ProductDetails'

import Error from './components/pages/Error'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Counter/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/picks" element={<Picks />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/second" element={<SecondHome />} />
      <Route path="/:id" element={<ProductDetails />} />

      <Route path="*" element={<Error />} />
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
