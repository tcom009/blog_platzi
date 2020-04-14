import axios from 'axios' 

import { TRAER_POR_USUARIO , CARGANDO , ERROR} from '../types/publicacionesTypes'


export const traerPorUsuario = (key) => async (dispatch, getState)=>{
    const { usuarios } = getState().usersReducer
    const { publicaciones } = getState().publicacionesReducer
    const usuario_id = usuarios[key].id
    

    try{
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`)
        const publicacionesActualizadas=[
            ...publicaciones,
            respuesta.data
        ]
        dispatch ({
            type:TRAER_POR_USUARIO,
            payload:publicacionesActualizadas
        })

    }
    catch(error){
        console.log (error.message)
        dispatch({
            type:ERROR,
            payload:error.message
    })
    }   
}