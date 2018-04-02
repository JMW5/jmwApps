//This is creating a page template for the markdown data.

import React from 'react';

export default function Template({
	data,
}) {

	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark;

	return (
		<div className="blog-post-container">
			<div style={{ 
				backgroundImage: `url(https://jacwynn.com/app/uploads/2017/09/StockSnap_F164KBFZ95.jpg)`,
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				height: 400,
				marginRight: 100,
			}}>
			
			</div>
			<div className="blog-post">
				<h1>{frontmatter.title}</h1>
			</div>
			<div
				className="blog-post-content"
				dangerouslySetInnerHTML={{__html: html}}
			/>
		</div>			
	)
}


export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`;