import React, {Component} from 'react';
import UserTracker from './user_tracker';

const UserTrackerList = (props) =>{

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
