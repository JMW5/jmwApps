import React from 'react';
//import PostLink from '../components/PostLink/post-link';
import Link from "gatsby-link";


const IndexPage = ({ data }) => {
	console.log(data);

	return (
		<div>
			{data.allMarkdownRemark.edges.map(({node}) => (
				<div>
					<Link to={node.frontmatter.path} className="article-box">
						<h3 className="title">{node.frontmatter.title}</h3>
					</Link>
					<p className="date">{node.frontmatter.date}</p>
					<p className="excerpt">{node.excerpt}</p>
				</div>
			))}
		</div>
	)
};

export default IndexPage



export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [ frontmatter___date ] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
					}
				}
			}
		}
	}

`;