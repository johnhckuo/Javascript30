export default function reducer(state={
    title: "hello world"
  }, action) {
    switch (action.type) {
      case "GET": {
        return {
          ...state,
        }
      }
    }
    return state
}