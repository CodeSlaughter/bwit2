import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Header, Carousel} from '../components'

/**
 * COMPONENT
 */
export const Landing = (props) => {
console.log(props)

  return (
    <div className="homepage">
    <div id="page-wrapper">
		<Header />
				<section id="banner">
					<header>
						<h2>Hi, and welcome to <strong>BWIT</strong>.</h2>
						<p>This site was created with the mission to educate and guide black women into the world of investing. Women have been historically known to invest at a lower percentage than men, and when race is taken into account (white male investors vs. black female investors) this number is even more pronounced. The disparity between the net-worth of a white individual compared to black is startling. The stock market and the world of investing see’s no color or gender and is the on place where a black woman can play catch financial catch up on somewhat equal footing. A recent report has shown that for every dollar of wealth owned by a white family, a black family owns just 5 cents. So let’s get started. 
						</p>
					</header>
				</section>

        <Carousel articles={props.articles} />


				<div className="wrapper style2">

					<article id="main" className="container special">
						<a href="#" className="image featured"><img src="images/pic06.jpg" alt="" /></a>
						<header>
							<h2><a href="#">Sed massa imperdiet magnis</a></h2>
							<p>
								Sociis aenean eu aenean mollis mollis facilisis primis ornare penatibus aenean. Cursus ac enim
								pulvinar curabitur morbi convallis. Lectus malesuada sed fermentum dolore amet.
							</p>
						</header>
						<p>
							Commodo id natoque malesuada sollicitudin elit suscipit. Curae suspendisse mauris posuere accumsan massa
							posuere lacus convallis tellus interdum. Amet nullam fringilla nibh nulla convallis ut venenatis purus
							sit arcu sociis. Nunc fermentum adipiscing tempor cursus nascetur adipiscing adipiscing. Primis aliquam
							mus lacinia lobortis phasellus suscipit. Fermentum lobortis non tristique ante proin sociis accumsan
							lobortis. Auctor etiam porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum
							consequat integer interdum integer purus sapien. Nibh eleifend nulla nascetur pharetra commodo mi augue
							interdum tellus. Ornare cursus augue feugiat sodales velit lorem. Semper elementum ullamcorper lacinia
							natoque aenean scelerisque.
						</p>
						<footer>
							<a href="#" className="button">Continue Reading</a>
						</footer>
					</article>

				</div>

				<div className="wrapper style1">

					<section id="features" className="container special">
						<header>
							<h2>Morbi ullamcorper et varius leo lacus</h2>
							<p>Ipsum volutpat consectetur orci metus consequat imperdiet duis integer semper magna.</p>
						</header>
						<div className="row">
							<article className="4u 12u(mobile) special">
								<a href="#" className="image featured"><img src="images/pic07.jpg" alt="" /></a>
								<header>
									<h3><a href="#">Gravida aliquam penatibus</a></h3>
								</header>
								<p>
									Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
									porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
								</p>
							</article>
							<article className="4u 12u(mobile) special">
								<a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
								<header>
									<h3><a href="#">Sed quis rhoncus placerat</a></h3>
								</header>
								<p>
									Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
									porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
								</p>
							</article>
							<article className="4u 12u(mobile) special">
								<a href="#" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
								<header>
									<h3><a href="#">Magna laoreet et aliquam</a></h3>
								</header>
								<p>
									Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
									porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
								</p>
							</article>
						</div>
					</section>

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
    email: state.user.email,
    articles: state.articles
  }
}

export default connect(mapState)(Landing)
