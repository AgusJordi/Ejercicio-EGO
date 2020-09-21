import {
    GET_ALL,
    GET_ONE
} from './actions'


const initialState = {
    model: [],
    models: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL: {

            return { ...state, models: action.payload }

        }

        case GET_ONE: {
            return { ...state, model: action.payload }
        }
        default: return state;
    }

}


export default rootReducer;