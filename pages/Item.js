import axios from 'axios';
import Error from 'next/error';
import Layout from '../components/Layout';
import Story from '../components/Story';
import CommentList from'../components/CommentList';

export default class Item extends React.Component {
	static async getInitialProps({ query }) {
		try {
			const { id } = query; 
			const response = await axios.get(`http://node-hnapi.herokuapp.com/item/${id}`);
			return { story: response.data }
		} catch (e) {
			const { status, statusText} = e.response; 			
			return { err: {status, statusText} }
		}
	}


	handleError(err) {
		const { status } = err;
		return <Error statusCode={status} />
	}

	renderStory() {
		const { story, err } = this.props;
		if (err) {
			this.handleError(err);
		} 
		return <Story content={story} />							
	}

	renderComments() {
		const { story: { comments }, err } = this.props;
		if (err) {
			this.handleError(err);
		}
		if(!comments){
			return <div> No comments </div>
		}
		return <CommentList comments={comments} />
	}
	
	render() {
		return (
				<Layout>
					{ this.renderStory() }
					{ this.renderComments() }
				</Layout>
			) 
	}
}