import React, {Component} from 'react';

//add a todo form that calls insertTodo function in UserTracker component
class AddTodo extends Component {
	constructor(props){
		super(props);

		this.state = {
			title: ""
		}
	}

	render(){
		return (
			<div className="form">                                 
	            <div className="form-group">
	                <label>Title</label>
	                <input onChange={event => this.setState({title: event.target.value})} type="text" className="form-control postTitle"/>
	            </div>
	            <button onClick={()=>this.onSubmitClick()} className="submitTodoButton coralButton">Submit</button>
	        </div>
		)
	}


	onSubmitClick(){
		this.props.submitTodo(this.props.userId, this.state.title);
	}

}

export default AddTodo;