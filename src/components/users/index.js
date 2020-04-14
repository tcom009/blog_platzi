import React, { Component } from 'react';
import * as usersActions from '../../actions/usersActions'
import { connect } from 'react-redux'
import Spinner from '../spinner'
import UsersTable from './usersTable'


class Users extends Component {

  
	 componentDidMount (){
		if (!this.props.usuarios.length){
			this.props.traerTodos()
		}
			
  	}

	  
	

	ponerContenido =() => {
		if (this.props.cargando){
			return (
				<Spinner/>
			)
		}
		if (this.props.error){

			return (
				<h1>ERROR!, Lo sentimos algo falló</h1>
			)

		}
		
		return (
			
				<UsersTable/>

		)
	}

	render() {
		
		return (
			<div >
				{this.ponerContenido()}
			</div>
		)
	}
}



const mapStateToProps = (reducers)=>{
	return reducers.usersReducer

}

export default connect (mapStateToProps,usersActions)(Users);