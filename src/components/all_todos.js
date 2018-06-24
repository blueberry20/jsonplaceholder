import React, {Component} from 'react';


const AllTodos = (props) =>{

	const allTodos = props.allTodos.map((item, index)=>{
		return (
				<li key={index}><h3>{item.title}</h3></li>
			)
	});

	return (
		<ul className="allTodosUl">
			{allTodos}
		</ul>

	)

}

export default AllTodos;