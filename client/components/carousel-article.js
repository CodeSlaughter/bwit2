import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


/**
 * COMPONENT
 */
export class CarouselArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const article = this.props.article
    if(article.length === 0){
      return <div />
    }
    return (
      <article>
        <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
        <header>
          <h3><NavLink to={`/articles/${article.id}`}>{article.title}</NavLink></h3>
        </header>
        <p>{article.subtitle}</p>
      </article>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(CarouselArticle)
