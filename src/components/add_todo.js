import React, {Component} from 'react';


class AddTodo extends Component {
	constructor(props){
		super(props);

		this.state = {
			title: ""
		}
	}

	render(){
		return (
			<div>
				<div className="addTodoForm">                                 
		            <div className="form-group">
		                <label>Title</label>
		                <input onChange={event => this.setState({title: event.target.value})} type="text" className="form-control postTitle"/>
		            </div>
		            <button onClick={()=>this.onSubmitClick()} className="submitTodoButton coralButton">Submit</button>
		        </div>
	        </div>
		)
	}


	onSubmitClick(){
		this.props.submitTodo(this.props.userId, this.state.title);
	}

}

export default AddTodo;