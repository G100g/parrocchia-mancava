import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelopeSquare,
    faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";

import "./school.scss";

export const ScuolaPageTemplate = ({
    title,
    content,
    image,
    contentComponent,
    schoolImages
}) => {
    const PageContent = contentComponent || Content;

    return (
        <>
            <div
                className="full-width-image margin-top-0"
                style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp
                            ? image.childImageSharp.fluid.src
                            : image
                    })`,
                    backgroundPosition: `bottom left`,
                    backgroundAttachment: `fixed`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
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
                        flexDirection: "column"
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
                            padding: "0.25em"
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
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                La struttura
                            </h2>

                            <article class="message is-info">
                                <div class="message-header">
                                    <p>Le aule delle quattro sezioni</p>
                                </div>
                                <div class="message-body">
                                    {/* <div className="notification is-info">
                                    <p className="has-text-centered  is-size-5">
                                        Le aule delle quattro sezioni
                                    </p>
                                </div> */}
                                    <div className="school-images columns is-multiline ">
                                        {schoolImages.edges
                                            .map(({ node }) => {
                                                return node;
                                            })
                                            .map(({ id, childImageSharp }) => {
                                                return (
                                                    <div className="school-images__image column is-half is-one-third-desktop">
                                                        <Img
                                                            key={id}
                                                            fluid={
                                                                childImageSharp.fluid
                                                            }
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </article>
                            <PageContent
                                className="content"
                                content={content}
                            />
                        </div>
                        <aside className="column is-4">
                            <div className="tile is-ancestor">
                                <div className="tile-parent notification">
                                    <div className="tile is-child content">
                                        <h2>Contatti</h2>
                                        <p>
                                            Via G. D’Annunzio N° 48, 41013
                                            <br />
                                            Manzolino di Castelfranco Emilia (
                                            MO)
                                        </p>
                                        <ul className="school-contacts__list">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faPhoneSquare}
                                                />{" "}
                                                <a
                                                    href="tel:059939476"
                                                    rel="nofollow"
                                                >
                                                    Tel/Fax 059 939476
                                                </a>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faPhoneSquare}
                                                />{" "}
                                                <a
                                                    href="tel:3921719085"
                                                    rel="nofollow"
                                                >
                                                    Cell 392 1719085
                                                </a>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faEnvelopeSquare}
                                                />{" "}
                                                <a href="mailto:sacrocuoremanzolino@gmail.com">
                                                    sacrocuoremanzolino@gmail.com
                                                </a>
                                            </li>
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
    contentComponent: PropTypes.func
};

const ScuolaPage = ({ data }) => {
    const { markdownRemark: post, coverImage, schoolImages } = data;
    return (
        <Layout>
            <ScuolaPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
                image={coverImage}
                schoolImages={schoolImages}
            />
        </Layout>
    );
};

ScuolaPage.propTypes = {
    data: PropTypes.object.isRequired
};

export default ScuolaPage;

export const scuolaPageQuery = graphql`
    query ScuolaPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
        coverImage: file(relativePath: { regex: "/cover-scuola/" }) {
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
            filter: { relativePath: { regex: "/scuola/foto-aula/" } }
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
