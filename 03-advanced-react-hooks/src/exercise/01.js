// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Exercise
// function countReducer(state, newState) {
//   return newState
// }

// function Counter({initialCount = 0, step = 1}) {
//   const [count, changeCount] = React.useReducer(countReducer, initialCount)

//   const increment = () => changeCount(count + step)
//   return <button onClick={increment}>{count}</button>
// }

// Extra Credit 1 - Accept Step as Action
// function countReducer(count, step) {
//   return count + step
// }

// function Counter({initialCount = 0, step = 1}) {
//   const [count, changeCount] = React.useReducer(countReducer, initialCount)

//   const increment = () => changeCount(step)
//   return <button onClick={increment}>{count}</button>
// }

// Extra Credit 2 - setState with Object
// function countReducer(state, action) {
//   return {
//     ...state,
//     ...action,
//   }
// }

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })

//   const {count} = state

//   const increment = () => setState({count: count + step})
//   return <button onClick={increment}>{count}</button>
// }

// Extra Credit 3 - Object or Function
// countReducer as Object
// const countReducer = (state, action) => ({
//   ...state,
//   ...action,
// })

// countReducer as Function
// const countReducer = (state, action) => action(state)

// countReducer as Function or Object
// const countReducer = (state, action) => ({
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action),
// })

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })

//   const {count} = state

//   const increment = () =>
//     setState(currentState => ({count: currentState.count + step}))
//   return <button onClick={increment}>{count}</button>
// }

// Extra Credit 4 - Traditional Dispatch Object
function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + action.step,
      }
    }

    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state

  const increment = () => setState({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
