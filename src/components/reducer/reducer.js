import {
    GET_ALL,
    GET_ONE,
    // GET_SEGMENT,
} from '../action/actions'


const initialState = {
    model: [],
    models: [],
    segmento: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL: {

            return { ...state, models: action.payload }

        }

        case GET_ONE: {
            return { ...state, model: action.payload }
        }
        // case GET_SEGMENT: {
        //     return { ...state, segmento: action.payload}
        // }
        default: return state;
    }

}


export default rootReducer;