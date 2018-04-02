import React from "react";
import Link from "gatsby-link";

const PostLink = ({ data }) => (
	console.log(data)
	<div>
		<Link to={data.frontmatter.path}>
			{data.frontmatter.title} ({data.frontmatter.date})
		</Link>
	</div>
);

export default PostLink;