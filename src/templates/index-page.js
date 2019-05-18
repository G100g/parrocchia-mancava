import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
    // body
    // image,
    // title,
    // heading,
    // subheading,
    // mainpitch,
    // description,
    // intro

    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content;
    return (
        <div>
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="is-size-1">Bacheca</h1>
                            <PageContent
                                className="content"
                                content={content}
                            />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="column is-6 is-4-desktop">
                            <aside>
                                <div className="notification">
                                    <h2 className="title is-4">
                                        Zona Pastorale di Castelfranco Emilia
                                    </h2>
                                    <h3 className="subtitle is-5">
                                        ORARIO SANTE MESSE FESTIVE
                                    </h3>

                                    <div className="content">
                                        <strong>Prefestive</strong>
                                        <ul>
                                            <li>
                                                18,00 Piumazzo (da novembre a
                                                marzo)
                                            </li>
                                        </ul>

                                        <strong>Festive</strong>
                                        <ul>
                                            <li>
                                                18,00 Piumazzo (da novembre a
                                                marzo)
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title is-4">Contatti</h4>
                                    <ul>
                                        <li>Castelfranco 059.926226 Gaggio</li>
                                        <li>
                                            059.938008 Manzolino 059.939122
                                            Panzano
                                        </li>
                                        <li>059.926707 Piumazzo 059.931208</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="tile is-child notification is-warning">
                                <p className="title is-4">
                                    La Liturgia di oggi
                                </p>
                                <p>
                                    <a
                                        target="_blank"
                                        href="http://www.lachiesa.it/calendario/Detailed/20190518.shtml"
                                    >
                                        Sabato della IV settimana di Pasqua
                                    </a>
                                    <br />
                                    <i>(Bianco)</i>
                                    <br />
                                    <b>I Lettura</b>
                                    <font size="-1"> At 13,44-52</font>
                                    <br />
                                    Noi ci rivolgiamo ai pagani.
                                    <br />
                                    <b>Salmo</b>
                                    <font size="-1"> (Sal 97)</font>
                                    <br />
                                    Tutti i confini della terra hanno veduto la
                                    vittoria del nostro Dio.
                                    <br />
                                    <b>Vangelo</b>
                                    <font size="-1"> Gv 14,7-14</font>
                                    <br />
                                    Chi ha visto me, ha visto il Padre.
                                </p>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child notification is-warning">
                                <p className="title is-4">
                                    Liturgia della Domenica
                                </p>
                                <p>
                                    <a
                                        target="_blank"
                                        href="http://www.lachiesa.it/calendario/Detailed/20190518.shtml"
                                    >
                                        Sabato della IV settimana di Pasqua
                                    </a>
                                    <br />
                                    <i>(Bianco)</i>
                                    <br />
                                    <b>I Lettura</b>
                                    <font size="-1"> At 13,44-52</font>
                                    <br />
                                    Noi ci rivolgiamo ai pagani.
                                    <br />
                                    <b>Salmo</b>
                                    <font size="-1"> (Sal 97)</font>
                                    <br />
                                    Tutti i confini della terra hanno veduto la
                                    vittoria del nostro Dio.
                                    <br />
                                    <b>Vangelo</b>
                                    <font size="-1"> Gv 14,7-14</font>
                                    <br />
                                    Chi ha visto me, ha visto il Padre.
                                </p>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child notification">
                                <p className="title is-4">Link utili</p>
                                <ul>
                                    <li>
                                        <a href="http://www.bologna.chiesacattolica.it/">
                                            Arcidiocesi di Bologna
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.educat.it">
                                            Educat
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.lachiesa.it">
                                            LaChiesa.it
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.maranatha.it/index.htm">
                                            Maràn athà
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.parrocchiacastelfrancoe.it/">
                                            Parrocchia di Castelfranco Emilia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.parrocchiapiumazzo.com">
                                            Parrocchia di Piumazzo
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.qumran2.net">
                                            Qumran2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.vatican.va/phome_it.htm">
                                            Vaticano On Line
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.chiesacattolica.it/">
                                            www.chiesacattolica.it/
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="has-background-info ">
                <section className="section has-text-white has-text-centered">
                    <h2 className="title is-2 has-text-white">Contatti</h2>

                    <div className="content ">
                        <p>
                            <strong className="has-text-white">
                                Don Emanuele Nadalini
                            </strong>
                            <br />
                            Tel. 059 939122
                        </p>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <p>
                                <strong className="has-text-white">
                                    Parrocchia San Bartolomeo di Manzolino
                                </strong>
                                <br />
                                Via G. D’Annunzio, 42 41013
                                <br />
                                Manzolino di Castelfranco Emilia MO
                            </p>
                        </div>

                        <div className="column">
                            <p>
                                <strong className="has-text-white">
                                    Parrocchia Santa Clelia Barbieri di
                                    Cavazzona
                                </strong>
                                <br />
                                Via Cassola di Sotto, 15 41013
                                <br />
                                Cavazzona di Castelfranco Emilia MO
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h1 className="title">
                                            {mainpitch.title}
                                        </h1>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">
                                            {mainpitch.description}
                                        </h3>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2">
                                            {heading}
                                        </h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs} />
                                <div className="columns">
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/products">
                                            See all products
                                        </Link>
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest stories
                                    </h3>
                                    <BlogRoll />
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        </div>
    );
};

IndexPageTemplate.propTypes = {
    content: PropTypes.string,
    contentComponent: PropTypes.func
};

const IndexPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <IndexPageTemplate
                contentComponent={HTMLContent}
                content={post.html}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
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
