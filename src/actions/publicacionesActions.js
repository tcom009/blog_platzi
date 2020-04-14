import axios from 'axios' 
import { TRAER_POR_USUARIO , CARGANDO , ERROR} from '../types/publicacionesTypes'
import * as usuariosTypes from '../types/usersTypes'



const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes


export const traerPorUsuario = (key) => async (dispatch, getState)=>{
    const { usuarios } = getState().usersReducer
    const { publicaciones } = getState().publicacionesReducer
    const usuario_id = usuarios[key].id
    

    try{
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`)
        //aqui traemos todo lo que tenemos en el reducer de publicaciones
        // y le añadimos lo obtenido en respuesta
        const publicacionesActualizadas=[
            ...publicaciones,
            respuesta.data
        ]
        //vamos a decirle al usersReducer cual es la casilla donde estan sus
        //publicaciones en publicaciones actualizadas
        //primero sacamos la posicion en el array de la ultima casilla con .length-1
        const publicacionesKey = publicacionesActualizadas.length -1
        //actualizamos los usuarios, para esto primero los destructuramos (usuarios viene de usersReducer)
        const usuariosActualizados = [...usuarios]
        //ahora a usuarios actualizados le buscamos el usuario con el key
        //y le agragamos el key de las publicaciones
        usuariosActualizados[key] ={
            ...usuarios[key],
            publicacionesKey
        }

        dispatch ({
            type:USUARIOS_TRAER_TODOS,
            payload:usuariosActualizados
        })

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