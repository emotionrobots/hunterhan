export const GlobalAppReducer = (state, action) => {
    switch (action.type) {
        case "start_loading":
            return {
                ...state,
                isLoading: true,
                loadingMessage: action.loadingMessage
            }
        case "stop_loading":
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}

export const initialState = {
    isLoading: false,
    loadingMessage: null
}