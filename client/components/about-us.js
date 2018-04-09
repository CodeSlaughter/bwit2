import React from 'react'
import { connect } from 'react-redux'
import { Nav } from '../components'

/**
 * COMPONENT
 */
export const AboutUs = (props) => {
    return (
        <div className="no-sidebar">
            <div id="page-wrapper">

                <div id="header">
                    <div className="inner">
                        <header>
                            <h1><a href="index.html" id="logo" /></h1>
                        </header>
                    </div>
                    <Nav />

                </div>
                <div className="wrapper style1">
                    <div className="container">
                        <article id="main" className="special">
                            <header>
                                <h2>About Us</h2>
                                <p>
                                    Why We Do What We Do
								</p>
                            </header>
                            <section>
                                <header>
                                    <h3>“When you learn, teach. When you get, give,” -Dr. Maya Angelou.</h3>
                                </header>
                                <p>
                                    We are a group of friends with a passion for investing who want to share the knowledge. When it comes to the investment community their power lies in jargon. Bear this and Bull that. The average person is left to feel they should leave finance to the professionals when actually by managing their own portfolios they are just as likely to beat or at least keep pace with the market. Our objective is to demystify the allusive world of investing with the hopes that all of you who are reading this will become active and confident investors.
							</p>
                            </section>
                        </article>
                    </div>

                </div>
            </div>
        </div>
    )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        email: state.user.email
    }
}

export default connect(mapState)(AboutUs)