import axios from 'axios';


export const GET_ALL = 'GET_ALL';
export const GET_ONE = 'GET_ONE';
// export const GET_SEGMENT = 'GET_SEGMENT';



export function getAll() {
    return function (dispatch) {
        axios.get('https://challenge.agenciaego.tech/models')
            .then((res) => res.data)
            .then(data => {
                dispatch({
                    type: GET_ALL,
                    payload: data
                });

            })

            .catch(() => alert('Algo salio mal'))

    }

}

export function getOne(id) {
    return function (dispatch) {
       
        axios.get(`https://challenge.agenciaego.tech/models/${id}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({
                    type: GET_ONE,
                    payload: data
                });
            })
            .catch(() => alert('Algo salio mal'))
    }
}

// export function getSegment(segment) {
//     return function (dispatch) {
//         console.log(segment, "ACTIONNNNNNNNNNNNNNN")
       
//         axios.get(`https://challenge.agenciaego.tech/models/${segment}`)
        
//              .then((res) => res.data)
//             .then(data => {
//                 dispatch({
                    
//                     type: GET_SEGMENT,
//                     payload: data
//                 });
//             })
//             .catch(() => alert('Aaaaaaaaaaaaaaaaa'))
//     }
// }



