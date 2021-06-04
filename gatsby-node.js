const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              cover
              images
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      const cover = edge.node.frontmatter.cover || "";

      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          cover,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });
  });
};

const remark = require("remark");
const remarkHTML = require("remark-html");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });

    if (node.frontmatter && node.frontmatter.intro) {
      // Parse subfields
      ["holy_masses_hours", "contacts", "links"]
        .map((fieldName) => {
          // console.log(fieldName, node.frontmatter);

          return {
            fieldName,
            html: remark()
              .use(remarkHTML)
              .processSync(node.frontmatter.intro[fieldName])
              .toString(),
          };
        })
        .forEach(({ fieldName, html }) => {
          // console.log({ html, fieldName });
          createNodeField({
            name: `html_${fieldName}`,
            node,
            value: html,
          });
        });
    }

    /*

    school_contacts {
          address
          phones
          email
          links
        }

        */
    if (node.frontmatter && node.frontmatter.school_contacts) {
      // Parse subfields
      Object.entries(node.frontmatter.school_contacts)
        // .filter((fieldName) => ["address"].includes(fieldName))
        .map(([fieldName, fieldValue]) => {
          // console.log(fieldName, node.frontmatter);

          return {
            fieldName,
            html: Array.isArray(fieldValue)
              ? fieldValue.map(mdToHtml)
              : mdToHtml(fieldValue),
          };
        })
        .forEach(({ fieldName, html }) => {
          // console.log({ html, fieldName });
          createNodeField({
            name: `html_school_contacts_${fieldName}`,
            node,
            value: html,
          });
        });
    }
  }
};

const mdToHtml = (fieldValue) =>
  remark()
    .use(remarkHTML)
    .processSync(fieldValue)
    .toString();
