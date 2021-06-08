import { Link } from 'react-router-dom';

const Card = ({ id, userId, title, body }) => {
	return (
		<div className='card'>
			<h2 className='title'>{title}</h2>
			<p>{body}</p>
			<Link to={`/userposts/${userId}`}>post by: user {userId}</Link>
			{/* <Link to={`/posts/${id}`}> ID: {id}</Link> */}
		</div>
	);
};

export default Card;
