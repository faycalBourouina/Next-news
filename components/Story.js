import Link from 'next/link';

export default (props) => {
	const { id, title, user, points, comments_count, time_ago, url } = props.content;
	return (
			<div className="story">
				<h2> { user } : </h2>
				<div className="story-title">
					<Link href={`/item?id=${id}`}>
						<a> { title } </a>
					</Link>
				</div>
				<div className="story-detail">
					<span>
						{ points } Points
					</span>
					<span>
						{ comments_count } Comments
					</span>
					<span>
						published {time_ago}
					</span>
				</div>
				<style jsx> {`
					.story {
						padding: 1em 0;
					}
					.story-title {
						font-size: 1rem;
						font-weight: 400;
						margin: 0;
						margin-bottom: 0.5em;
					}
					.story-title a {
						color: #333;
						text-decoration: none;

					} 
					.story-title a:hover {
						text-decoration: underline;
					}
					.story-detail {
						font-size: 0.8 rem;
						font-weight: bold;
						padding-bottom: 1em;
						border-bottom: 1px solid rgba(0,0,0,1);
						margin-bottom: 1em;

					}
					.story-detail span {
						margin-right: 1em;
					}
				
				`} </style>
			</div>
		)

}