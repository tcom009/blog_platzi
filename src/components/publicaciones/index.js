import React from 'react'
import { connect } from 'react-redux'


import * as usersActions from '../../actions/usersActions'
import * as publicacionesActions from '../../actions/publicacionesActions'


const { traerTodos: usuariosTraerTodos} = usersActions
const { traerPorUsuario: publicacionesTraerPorUsuarios} = publicacionesActions


class Publicaciones extends React.Component {
    
    async componentDidMount (){ 
        if (!this.props.usersReducer.usuarios.length){
          await this.props.usuariosTraerTodos()
        }
        this.props.publicacionesTraerPorUsuarios(this.props.match.params.key)
    }
    


    render (){
        console.log (this.props)
        return(
            <div>
                <h1>
                    Publicaciones de {this.props.match.params.key}
                </h1>

            </div>
        )
    }
}


const mapStateToProps = ({usersReducer, publicacionesReducer})=>{
	return {
        usersReducer,
        publicacionesReducer
    }

}


const mapDispatchToProps = {
    usuariosTraerTodos,
    publicacionesTraerPorUsuarios
}

export default connect (mapStateToProps, mapDispatchToProps)(Publicaciones)



