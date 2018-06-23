import React, {Component} from 'react';
import AllPosts from './all_posts';
import AllTodos from './all_todos';
import AddPost from './add_post';
import AddTodo from './add_todo';


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
		this.setState = this.setState.bind(this);
	}




	//Records a post for a user
	insertPost(user_id, post) {
		fetch("https://jsonplaceholder.typicode.com/posts", {
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
	}

	//Records a todo for a user
	insertTodo(user_id, todo) {
		console.log(todo);
		fetch("https://jsonplaceholder.typicode.com/todos", {
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
		.then(json => console.log(json));
	}

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
			//console.log(longestBodyObj.body);
			this.setState({longestBody: longestBodyObj.body});
		});	
	}

	//Show the post where the title text has  smallest length for the user
	showSmallestPostByTitle(user_id) {
		this.getAllPosts(user_id).then((data) =>{
			let smallestTitleObj = data.reduce(function(prev, curr) {
				return prev.title.length < curr.title.length ? prev : curr;
			});
			//console.log(smallestTitleObj.title);
			this.setState({smallestTitle: smallestTitleObj.title});
		});	
	}

	//Show the post where the title text has  longest length for the user
	showLongestPostByTitle(user_id) {
		this.getAllPosts(user_id).then((data) =>{
			let longestTitleObj = data.reduce(function(prev, curr) {
				return prev.title.length > curr.title.length ? prev : curr;
			});
			//console.log(longestTitleObj.title);
			this.setState({longestTitle: longestTitleObj.title});
		});	
	}

	//Show the todo where the title text has smallest length for the user
	showSmallestTodo(user_id) {
		this.getAllTodos(user_id).then((data) =>{
			let smallestTodoObj = data.reduce(function(prev, curr) {
				return prev.title.length < curr.title.length ? prev : curr;
			});
			//console.log(smallestTodoObj.title);
			this.setState({smallestTodo: smallestTodoObj.title});
		});	
	}

	//Show the todo where the title text has longest length for the user
	showLongestTodo(user_id) {
		this.getAllTodos(user_id).then((data) =>{
			let longestTodoObj = data.reduce(function(prev, curr) {
				return prev.title.length > curr.title.length ? prev : curr;
			});
			//console.log(longestTodoObj.title);
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
			//console.log(data);
			this.setState({allTodos: data});
		});	
	}

	test(user_id, post){
		console.log(user_id);
		//this.setState({postSubmitted: true});
	}

	render(){
		//const insertPost = (user_id, post)=>{this.insertPost(user_id, post)};

		return (<div>
					<div className="flex">
			            <div className="tiles smallestPost">
		                    <h3>Smallest Post</h3>
		                    <div>{this.state.smallestBody}</div>
		                </div>
		                <div className="tiles smallestPost">
		                    <h3>Longest Post</h3>
		                    <div>{this.state.longestBody}</div>
		                </div>
		                <div className="tiles smallestPost">
		                    <h3>Smallest Title</h3>
		                    <div>{this.state.smallestTitle}</div>
		                </div>
		                 <div className="tiles smallestPost">
		                    <h3>Longest Title</h3>
		                    <div>{this.state.longestTitle}</div>
		                </div>
		                <div className="tiles smallestPost">
		                    <h3>Smallest Todo</h3>
		                    <div>{this.state.smallestTodo}</div>
		                </div>
		                <div className="tiles smallestPost">
		                    <h3>Longest Todo</h3>
		                    <div>{this.state.longestTodo}</div>
		                </div>
		                <div className="allPosts flex">
		                	<h3>All Posts</h3>
		                	<AllPosts allPosts={this.state.allPosts}/>
		                </div>
		                <div className="allTodos">
		                	<h3>All Todos</h3>
		                	<AllTodos allTodos={this.state.allTodos}/>
		                </div>
		                <div className="addPost">
		                	<h3>Add Post </h3>
		                	<AddPost userId={this.state.userId} submitPost={this.insertPost.bind(this)}/>	                	
		                </div>
		                <div className="addPost">
		                	<h3>Add Todo </h3>
		                	<AddTodo userId={this.state.userId} submitTodo={this.insertTodo.bind(this)}/>	                	
		                </div>
		            </div>
                </div>
			
			)
	}


}



export default UserTracker;
