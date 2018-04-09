import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Footer = (props) => {

    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="12u">
                        <section className="contact">
                            <header>
                                <h3>Are you ready to take control of your financial future?</h3>
                            </header>
                            <p />

                        </section>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="12u">
                        <section className="contact">
                            <ul className="icons">
                                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                            </ul>
                        </section>
                        <div className="copyright">
                            <ul className="menu">
                                <li>&copy; BWIT. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                                <li>Photo by Fancycrave from Pexels</li>
                            </ul>
                        </div>

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

export default connect(mapState)(Footer)


