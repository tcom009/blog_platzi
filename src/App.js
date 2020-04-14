import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './components/menu' 
import Users from './components/users/index'
import Publicaciones from './components/publicaciones/index'



const Tareas = () =>(
	<div>
		Hola 
	</div>
)

const App = () => (
 <BrowserRouter>

	<Menu/>

		<div className="margen">
			<Route exact path= "/" component={Users}/>
			<Route exact path= "/tareas" component={Tareas}/>
			<Route exact path = "/publicaciones/:key" component={Publicaciones}/>
		</div>
	
 </BrowserRouter>

)

export default App;