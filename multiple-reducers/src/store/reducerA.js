const initialState = {
    a:1
}

const reducerA = (state = initialState,action) => {
    const newState = {...state}

    switch(action.type){
        case 'UPDATE_A':
        return {
            ...state,
            a: state.a + action.value
        }
    }

    return newState
}

export default reducerA