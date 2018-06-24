import React from 'react';

//display all todos for a user
const AllTodos = (props) =>{

	const allTodos = props.allTodos.map((item, index)=>{
		return (
				<li key={index}>
					<h4>{item.title}</h4>
				</li>
			)
	});

	return (
		<ul className="allTodosUl">
			{allTodos}
		</ul>

	)

}

export default AllTodos;