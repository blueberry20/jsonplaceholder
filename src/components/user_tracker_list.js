import React from 'react';
import UserTracker from './user_tracker';

const UserTrackerList = (props) =>{
	//render a section for each odd numbered user until 5
	const renderUserSections = function(){
		let userSections = [];
		for (let i=0; i <= 5; i++){
			if (!(i % 2 ) == 0){
				userSections.push(
					 <section key={i} className={`section${i}`}>
		                <div className="container">
		                    <h2>{`User ${i}`}</h2>
		                    {<UserTracker user_id = {i}/>}	     		                                  
		                </div>
		            </section>

				)
			}
		}
		return userSections;
	}


	return (
	        renderUserSections()
		)
}

export default UserTrackerList;
