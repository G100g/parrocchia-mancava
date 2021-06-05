import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faChild,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import Content, { HTMLContent } from "../components/Content";
import WidgetLiturgiaGiorno from "../components/WidgteLiturgia";
// import WidgetLiturgiaDomenica from "../components/WidgteLiturgiaDomenica";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  content,
  content_contacts,
  content_holy_masses,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-12">
            <div className="box has-background-primary is-size-4 is-size-6-mobile">
              <Link to="/parrocchie" className="has-text-white is-block">
                <span className="icon is-inline is-pulled-right">
                  <FontAwesomeIcon className={""} icon={faArrowCircleRight} />
                </span>
                <div class="title has-text-white">Parrocchie </div>
                <div class="subtitle has-text-white">
                  Manzolino • Cavazzona • Panzano • Riolo • Recovato •
                  Rastellino
                </div>
              </Link>
            </div>
          </div>

          <div className="column is-6">
            <div className="box has-background-link is-size-4 is-size-6-mobile">
              <Link to="/scuola" className="has-text-white is-block" style={{}}>
                <span className="icon is-inline is-pulled-right">
                  <FontAwesomeIcon className={""} icon={faArrowCircleRight} />
                </span>
                <div class="title has-text-white">Sacro Cuore </div>
                <div class="subtitle has-text-white">
                  Scuola Dell’Infanzia di Manzolino{" "}
                </div>
              </Link>
            </div>
          </div>

          <div className="column is-6">
            <div className="box has-background-info is-size-4 is-size-6-mobile">
              <Link
                to="/scuola/savioli"
                className="has-text-white is-block"
                style={{}}
              >
                <span className="icon is-inline is-pulled-right">
                  <FontAwesomeIcon className={""} icon={faArrowCircleRight} />
                </span>
                <div class="title has-text-white">Ferninando Savioli </div>
                <div class="subtitle has-text-white">
                  Scuola Dell’Infanzia di Riolo
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="column is-12">
                        <div className="box has-background-danger is-size-4 is-size-6-mobile">
                            <Link
                                to="/dynamis"
                                className="has-text-white is-block"
                            >
                                <span className="icon is-inline is-pulled-right">
                                    <FontAwesomeIcon
                                        className={""}
                                        icon={faArrowCircleRight}
                                    />
                                </span>
                                <div class="title has-text-white">
                                    Associazione Dynamis
                                </div>
                            </Link>
                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

IndexPageTemplate.propTypes = {
  content: PropTypes.string,
  content_holy_masses: PropTypes.string,
  content_contacts: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        content_holy_masses={post.fields.html_holy_masses_hours}
        content_contacts={post.fields.html_contacts}
        content_links={post.fields.html_links}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
      fields {
        html_holy_masses_hours
        html_contacts
        html_links
      }
    }
  }
`;

// export const pageQuery = graphql`
//     query IndexPageTemplate {
//         markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//             frontmatter {
//                 title
//                 image {
//                     childImageSharp {
//                         fluid(maxWidth: 2048, quality: 100) {
//                             ...GatsbyImageSharpFluid
//                         }
//                     }
//                 }
//                 heading
//                 subheading
//                 mainpitch {
//                     title
//                     description
//                 }
//                 description
//                 intro {
//                     blurbs {
//                         image {
//                             childImageSharp {
//                                 fluid(maxWidth: 240, quality: 64) {
//                                     ...GatsbyImageSharpFluid
//                                 }
//                             }
//                         }
//                         text
//                     }
//                     heading
//                     description
//                 }
//             }
//         }
//     }
// `;
