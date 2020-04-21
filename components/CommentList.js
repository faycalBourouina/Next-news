import Comment from './Comment';
export default (props) => {
	const { comments } = props;
	return comments.map( comment => <Comment comment={comment} key={comment.id} />);
}