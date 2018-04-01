import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CarouselArticle} from '../components'
import {fetchArticles} from '../store'

/**
 * COMPONENT
 */
export class Carousel extends Component{
    constructor(props) {
        super(props);
        this.state = {
    
        }
      }

    render(){
        let articles = this.props.articles;
        const articleList = articles && articles.map((article) => {
            return <CarouselArticle key={article.id} title={article.title} subtitle={article.subtitle} />
        }) 
        return (
            <section className="carousel">
                <div className="reel">
                   {articleList}
                </div>
            </section>
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

// const mapDispatch = (dispatch) => {
//     return {
//       loadInitialData () {
//         dispatch(fetchArticles())
//       }
//     }
//   }
export default connect(mapState)(Carousel)
