import React, {Component} from 'react';


class AddPost extends Component {
	constructor(props){
		super(props);

		this.state = {
			title: "",
			body: {}
		}
	}

	render(){
		return (
			<div>
				<div className="addPostForm">                                 
		            <div className="form-group">
		                <label>Title</label>
		                <input onChange={event => this.setState({title: event.target.value})} type="text" className="form-control postTitle"/>
		            </div>
		             
		            <div className="form-group">
		                <label>Post</label>
		                <textarea onChange={event => this.setState({body: event.target.value})} className="form-control postBody" rows="3"></textarea>
		            </div>
		            <button onClick={()=>this.onSubmitClick()} className="submitPostButton coralButton">Submit</button>
		        </div>
	        </div>
		)
	}


	onSubmitClick(){
		this.props.submitPost(this.props.userId, {title: this.state.title, body: this.state.body});
	}

}

export default AddPost;