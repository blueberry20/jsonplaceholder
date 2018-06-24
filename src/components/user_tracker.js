import React, {Component} from 'react';
import AllPosts from './all_posts';
import AllTodos from './all_todos';
import AddPost from './add_post';
import AddTodo from './add_todo';
import Collapsible from 'react-collapsible';


const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";

class UserTracker extends Component {

	constructor(props){
		super(props);

		this.state = {
			smallestBody: "",
			longestBody: "",
			smallestTitle: "",
			longestTitle:"",
			smallestTodo:"",
			longestTodo:"",
			allPosts: [],
			allTodos:[],
			postSubmitted: false,
			todoSubmitted:false,
			userId: this.props.user_id
		};

		this.showSmallestPostByBody(this.props.user_id);
		this.showLongestPostByBody(this.props.user_id);
		this.showSmallestPostByTitle(this.props.user_id);
		this.showLongestPostByTitle(this.props.user_id);
		this.showSmallestTodo(this.props.user_id);
		this.showLongestTodo(this.props.user_id);
		this.showAllPosts(this.props.user_id);
		this.showAllTodos(this.props.user_id);
		this.insertPost = this.insertPost.bind(this);
		//this.setState = this.setState.bind(this);
	}


	//Records a post for a user
	insertPost(user_id, post) {
		fetch(postsUrl, {
			method: "POST",
			body: JSON.stringify({
				title: post.hello,
				body: post.body,
				userId: user_id
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			}
		)
		.catch(function(error) {
		    console.log(error)
		});
	}

	//Records a todo for a user
	insertTodo(user_id, todo) {
		//console.log(todo);
		fetch(todosUrl, {
			method: "POST",
			body: JSON.stringify({
				title: todo,
				completed: false,
				userId: user_id
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(function(error) {
		    console.log(error)
		}); 
	}

	// submitTodo(user_id, todo){
	// 	this.insertTodo(user_id, todo).then((data)=>{
	// 		//let completed = true;
	// 	})
	// 	this.setState({todoSubmitted: true});
	// }

	//Show the post where the body text has smallest length for the user
	showSmallestPostByBody(user_id) {
		this.getAllPosts(user_id).then((data) =>{
			let smallestBodyObj = data.reduce(function(prev, curr) {
				return prev.body.length < curr.body.length ? prev : curr;
			});
			this.setState({smallestBody: smallestBodyObj.body});
		});	
	}

	//Show the post where the body text has longest length for the user
	showLongestPostByBody(user_id) {
		this.getAllPosts(user_id).then((data) =>{
			let longestBodyObj = data.reduce(function(prev, curr) {
				return prev.body.length > curr.body.length ? prev : curr;
			});
			this.setState({longestBody: longestBodyObj.body});
		});	
	}

	//Show the post where the title text has  smallest length for the user
	showSmallestPostByTitle(user_id) {
		this.getAllPosts(user_id).then((data) =>{
			let smallestTitleObj = data.reduce(function(prev, curr) {
				return prev.title.length < curr.title.length ? prev : curr;
			});
			this.setState({smallestTitle: smallestTitleObj.title});
		});	
	}

	//Show the post where the title text has  longest length for the user
	showLongestPostByTitle(user_id) {
		this.getAllPosts(user_id).then((data) =>{
			let longestTitleObj = data.reduce(function(prev, curr) {
				return prev.title.length > curr.title.length ? prev : curr;
			});
			this.setState({longestTitle: longestTitleObj.title});
		});	
	}

	//Show the todo where the title text has smallest length for the user
	showSmallestTodo(user_id) {
		this.getAllTodos(user_id).then((data) =>{
			let smallestTodoObj = data.reduce(function(prev, curr) {
				return prev.title.length < curr.title.length ? prev : curr;
			});
			this.setState({smallestTodo: smallestTodoObj.title});
		});	
	}

	//Show the todo where the title text has longest length for the user
	showLongestTodo(user_id) {
		this.getAllTodos(user_id).then((data) =>{
			let longestTodoObj = data.reduce(function(prev, curr) {
				return prev.title.length > curr.title.length ? prev : curr;
			});
			this.setState({longestTodo: longestTodoObj.title});
		});	
	}



	getAllPosts(user_id){
		return fetch(`${postsUrl}?userId=${user_id}`)
		.then(response => response.json())
		.then(json => {return json})
		.catch(function(error) {
		    console.log(error)
		}); 
	}

	getAllTodos(user_id){
		return fetch(`${todosUrl}?userId=${user_id}`)
		.then(response => response.json())
		.then(json => {return json})
		.catch(function(error) {
		    console.log(error)
		}); 
	}

	showAllPosts(user_id){
		this.getAllPosts(user_id).then((data) =>{
			this.setState({allPosts: data});
		});	
	}

	showAllTodos(user_id){
		this.getAllTodos(user_id).then((data) =>{
			this.setState({allTodos: data});
		});	
	}

	//render accordion with collapsible sections
	render(){
		return (<div>
					<Collapsible open={true} trigger="User Stats" className="is-open">
						<div className="flex content">
				            <div className="tiles smallestPost">
			                    <h3>Smallest Post</h3>
			                    <p>{this.state.smallestBody}</p>
			                </div>
			                <div className="tiles smallestPost">
			                    <h3>Longest Post</h3>
			                    <p>{this.state.longestBody}</p>
			                </div>
			                <div className="tiles smallestPost">
			                    <h3>Smallest Title</h3>
			                    <p>{this.state.smallestTitle}</p>
			                </div>
			                 <div className="tiles smallestPost">
			                    <h3>Longest Title</h3>
			                    <p>{this.state.longestTitle}</p>
			                </div>
			                <div className="tiles smallestPost">
			                    <h3>Smallest Todo</h3>
			                    <p>{this.state.smallestTodo}</p>
			                </div>
			                <div className="tiles smallestPost">
			                    <h3>Longest Todo</h3>
			                    <p>{this.state.longestTodo}</p>
			                </div>	
		                </div>				
					</Collapsible>
					<Collapsible trigger="All Posts">
						<div className="content">
							<AllPosts allPosts={this.state.allPosts}/>
						</div>
					</Collapsible>
					<Collapsible trigger="All Todos">
						<div className="content">
							<AllTodos allTodos={this.state.allTodos}/>
						</div>
					</Collapsible>
					<Collapsible trigger="Add Post">
						<div className="content">
							<AddPost userId={this.state.userId} submitPost={this.insertPost.bind(this)}/>
						</div>
					</Collapsible>
					<Collapsible trigger="Add Todo">
						<div className="content">
							<AddTodo userId={this.state.userId} submitTodo={this.insertTodo.bind(this)}/>
							{this.state.todoSubmitted == true ? "Todo was submitted" : null}
						</div>
					</Collapsible>
				</div>
			)
	}

}


export default UserTracker;



