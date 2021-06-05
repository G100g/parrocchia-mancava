import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faPhoneSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import "./school.scss";

export const ScuolaPageTemplate = ({
  title,
  contacts,
  content,
  image,
  contentComponent,
  schoolImages,
}) => {
  const PageContent = contentComponent || Content;
  console.log(schoolImages);
  return (
    <>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            image && image.childImageSharp
              ? image.childImageSharp.fluid.src
              : image
          })`,
          backgroundPosition: `bottom left`,
          backgroundAttachment: `fixed`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-background-warning"
            style={{
              // boxShadow:
              //     "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
              // backgroundColor: "rgb(255, 68, 0)",
              // color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <PageContent className="content" content={content} />
              <article className="message">
                {/* <div className="message-header">
                  <p>Le aule delle quattro sezioni</p>
                </div> */}
                <div className="message-body">
                  {/* <div className="notification is-info">
                                    <p className="has-text-centered  is-size-5">
                                        Le aule delle quattro sezioni
                                    </p>
                                </div> */}
                  <div className="school-images columns is-multiline ">
                    {schoolImages &&
                      schoolImages.edges
                        .map(({ node }) => {
                          return node;
                        })
                        .map(({ id, childImageSharp }) => {
                          return (
                            <div
                              key={id}
                              className="school-images__image column is-half is-one-third-desktop"
                            >
                              <Img fluid={childImageSharp.fluid} />
                            </div>
                          );
                        })}
                  </div>
                </div>
              </article>
            </div>
            <aside className="column is-4">
              <div className="tile is-ancestor sticky-content">
                <div className="tile-parent notification">
                  <div className="tile is-child content">
                    <h2>Contatti</h2>

                    <HTMLContent content={contacts.address} />

                    {/* <p>
                      <strong>Scuola dell’Infanzia “Sacro Cuore”</strong>
                      <br />
                      Via G. D’Annunzio, 48
                      <br />
                      41013 Manzolino di Castelfranco Emilia (MO)
                    </p> */}
                    <ul className="school-contacts__list">
                      {contacts.phones.map(({ text, value }) => (
                        <li key={value}>
                          <FontAwesomeIcon icon={faPhoneSquare} />{" "}
                          <a href={`tel:${value}`} rel="nofollow">
                            {text} {value}
                          </a>
                        </li>
                      ))}
                      {contacts.email.map(({ text, value }) => (
                        <li key={value}>
                          <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
                          <a href={`mailto:${value}`} rel="nofollow">
                            {text ? `${text}:` : ""} {value}
                          </a>
                        </li>
                      ))}
                      {contacts.links.map(({ text, value }) => (
                        <li key={value}>
                          <FontAwesomeIcon icon={faLink} />{" "}
                          <a href={`${value}`} rel="nofollow">
                            {text}
                          </a>
                        </li>
                      ))}
                      {/* <li>
                        <FontAwesomeIcon icon={faPhoneSquare} />{" "}
                        <a href="tel:3317529476" rel="nofollow">
                          Tel. Segreteria 331 7529476
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPhoneSquare} />{" "}
                        <a href="tel:059939476" rel="nofollow">
                          Tel. Scuola 059 939476
                        </a>
                      </li> */}
                      {/* <li>
                        <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
                        <a href="mailto:sacrocuoremanzolino@gmail.com">
                          sacrocuoremanzolino@gmail.com
                        </a>
                      </li> */}
                      {/* <li>
                        <FontAwesomeIcon icon={faLink} />{" "}
                        <strong>Facebook:</strong>
                        <a href="https://www.facebook.com/Scuola-dellinfanzia-Sacro-Cuore-di-Manzolino-1549454572032939">
                          Scuola dell’Infanzia “Sacro Cuore” di Manzolino
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

ScuolaPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ScuolaPage = ({ data }) => {
  const { markdownRemark: post, coverImage, schoolImages } = data;
  const contacts = {
    address: post.fields.html_school_contacts_address,
    phones: post.frontmatter.school_contacts.phones,
    links: post.frontmatter.school_contacts.links,
    email: post.frontmatter.school_contacts.email,
  };
  return (
    <Layout>
      <ScuolaPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        contacts={contacts}
        content={post.html}
        image={coverImage}
        schoolImages={schoolImages}
      />
    </Layout>
  );
};

ScuolaPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ScuolaPage;

export const scuolaPageQuery = graphql`
  query ScuolaPage($id: String!, $cover: String!, $images: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        school_contacts {
          phones {
            text
            value
          }
          email {
            text
            value
          }
          links {
            text
            value
          }
        }
      }
      fields {
        html_school_contacts_address
      }
    }
    coverImage: file(relativePath: { eq: $cover }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          quality: 80 # duotone: { highlight: "#ffffff", shadow: "#663399" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    schoolImages: allFile(
      filter: {
        relativePath: { regex: $images }
        sourceInstanceName: { eq: "images" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid(
              maxWidth: 800
              quality: 80 # duotone: { highlight: "#ffffff", shadow: "#663399" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
