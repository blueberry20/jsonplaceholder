import React, {Component} from 'react';


const AllPosts = (props) =>{
	
	const allPosts = props.allPosts.map((item, index)=>{
		return (
			<div key={index} className="tiles">
				<h3>{item.title}</h3>
				<p>{item.body}</p>
			</div>
			)
	});

	return (
		<div className="flex">
			{allPosts}
		</div>

	)

}

export default AllPosts;