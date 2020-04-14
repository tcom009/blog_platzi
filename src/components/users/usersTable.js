import React from 'react'
import { connect } from 'react-redux'
import { Link } from  'react-router-dom'
import '../styles/eye.css'




function UsersTable (props) {

    const ponerFilas = () => props.usuarios.map((usuario, key) => (
		<tr key={ usuario.id}>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
            <td> 
                <Link to= {`/publicaciones/${key}`}>
                    <div className="eye-solid3 icon"/> 
                </Link> 
            </td>
		</tr>
	));

    return(
    <table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
							</th>
						</tr>
					</thead>
					<tbody>
						{ ponerFilas() }
					</tbody>
				</table>



    )



}

const mapStateToProps =(reducers) => {
    return reducers.usersReducer

}


export default connect (mapStateToProps)(UsersTable)