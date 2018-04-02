/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path')


exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	console.log(boundActionCreators);

	const blogTemplate = path.resolve(`src/templates/blogTemplate.js`);

	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						html
						id
						frontmatter {
							path
						}
					}
				}
			}
		}
	`)

	.then(result => {
		if (result.errors) {
			console.log("There is an error");
		}

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogTemplate,
				context: {},
			})
		})
	})
}