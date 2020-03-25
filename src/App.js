import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Menu from './components/menu' 
import Users from './components/users/index'




const Tareas = () =>(
	<div>
		Hola 
	</div>
)

const App = () => (
 <BrowserRouter>

	<Menu/>
	<Route exact path= "/" component={Users}/>
	<Route exact path= "/tareas" component={Tareas}/>
	
 </BrowserRouter>

)

export default App;