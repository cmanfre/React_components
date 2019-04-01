import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 4:45PM" 
					userComment="Nice blog post!" 
					photo={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timeAgo="Today at 2:00AM" 
					userComment="Cool post." 
					photo={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					imeAgo="Yesterday at 5:00PM" 
					userComment="Interesting read." 
					photo={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));