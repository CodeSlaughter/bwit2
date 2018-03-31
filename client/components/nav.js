import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Nav = (props) => {

  return (
    <nav id="nav">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li>
            <a href="#">Learn</a>
            <ul>
                <li><a href="#">Investing</a></li>
                <li><a href="#">Budgeting</a></li>
            </ul>
        </li>
        <li><a href="left-sidebar.html">About Us</a></li>
    </ul>
</nav>
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

export default connect(mapState)(Nav)