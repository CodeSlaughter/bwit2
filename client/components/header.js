import React from 'react'
import {connect} from 'react-redux'
import {Nav} from '../components'
import ReactRotatingText from 'react-rotating-text';

/**
 * COMPONENT
 */
export const Header = (props) => {

  return (
    <div id="header">
        <div className="inner">
            <header>
                <h1><a href="index.html" id="logo">BWIT</a></h1>
                <hr style={{ width: 200 }} />
                <p id="test">I want to learn about <ReactRotatingText items={['financial freedom', 'trading', 'investing', 'retirement', 'budgeting']} pause={2000} emptyPause={100} /> </p>
            </header>
            <footer>
                <a href="#banner" className="button circled scrolly">Start</a>
            </footer>
        </div>
        <Nav />
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

export default connect(mapState)(Header)
