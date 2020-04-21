import axios from 'axios';
import Error from 'next/error';
import Link from 'next/link';

import Layout from '../components/Layout';
import Story from '../components/Story';

export default class Index extends React.Component {

	static async getInitialProps({ query }) {
		try {
			const page = Number(query.page) || 1;
			const response = await axios.get(`https://node-hnapi.herokuapp.com/news?page=${page}`)
			return { stories: response.data, page }
		} catch (e) {
			console.log(e)
			const { status, statusText} = e.response; 			
			return { err: {status, statusText} }
		}
	}

	renderHelper () {
		const { stories, err } = this.props;
		if (stories) {
			return stories.map( story => (
						<Story key={story.id} content={story} />
					));
		} 
		return <Error statusCode={err.status} /> 

	}

	render() {
		let { page } = this.props;
		return (
				<Layout>
					<div>
						<Link href={`/?page=${++page}`}>
							<a> Next {page} </a>
						</Link>
						{ this.renderHelper() }
					</div>
				</Layout>
			)
	}
} 