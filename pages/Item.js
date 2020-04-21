import axios from 'axios';
import Error from 'next/error';
import Story from '../components/Story';

export default class Item extends React.Component {
	static async getInitialProps({ query }) {
		try {
			const { id } = query; 
			const response = await axios.get(`http://node-hnapi.herokuapp.com/item/${id}`)
			return { story: response.data }
		} catch (e) {
			const { status, statusText} = e.response; 			
			return { err: {status, statusText} }
		}
	}

	renderHelper() {
		const { story, err } = this.props;
		if (err) {
			const { status } = err;
			return <Error statusCode={status} />
		} 
		return <Story content={story} /> 
	}
	
	render() {
		return this.renderHelper();
	}
}