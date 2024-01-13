// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)

  return <CountContext.Provider value={{count, setCount}} {...props} />
}

function useCart() {
  const context = React.useContext(CountContext)

  if (!context) {
    throw new Error('useCount must be used within the CounterProvider')
  }
  return context
}

function CountDisplay() {
  const {count} = useCart()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = useCart()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App