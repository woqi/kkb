
export const counterReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state
  }
}

export const counterReducer2 = (state = { num: 0 }, { type, payload }) => {
  switch (type) {
    case 'ADD2':
      return { ...state, num: state.num + payload }

    default:
      return state
  }
}