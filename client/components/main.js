import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {Header} from '../components'


/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

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


				<section className="carousel">
					<div className="reel">

						<article>
							<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Pulvinar sagittis congue</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Fermentum sagittis proin</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Sed quis rhoncus placerat</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Ultrices urna sit lobortis</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Varius magnis sollicitudin</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Pulvinar sagittis congue</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Fermentum sagittis proin</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Sed quis rhoncus placerat</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Ultrices urna sit lobortis</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

						<article>
							<a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
							<header>
								<h3><a href="#">Varius magnis sollicitudin</a></h3>
							</header>
							<p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
						</article>

					</div>
				</section>

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

				<div id="footer">
					<div className="container">
						<div className="row">


								<section className="4u 12u(mobile)">
									<header>
										<h2 className="icon fa-twitter circled"><span className="label">Tweets</span></h2>
									</header>
									<ul className="divided">
										<li>
											<article className="tweet">
												Amet nullam fringilla nibh nulla convallis tique ante sociis accumsan.
												<span className="timestamp">5 minutes ago</span>
											</article>
										</li>
										<li>
											<article className="tweet">
												Hendrerit rutrum quisque.
												<span className="timestamp">30 minutes ago</span>
											</article>
										</li>
										<li>
											<article className="tweet">
												Curabitur donec nulla massa laoreet nibh. Lorem praesent montes.
												<span className="timestamp">3 hours ago</span>
											</article>
										</li>
										<li>
											<article className="tweet">
												Lacus natoque cras rhoncus curae dignissim ultricies. Convallis orci aliquet.
												<span className="timestamp">5 hours ago</span>
											</article>
										</li>
									</ul>
								</section>

								<section className="4u 12u(mobile)">
									<header>
										<h2 className="icon fa-file circled"><span className="label">Posts</span></h2>
									</header>
									<ul className="divided">
										<li>
											<article className="post stub">
												<header>
													<h3><a href="#">Nisl fermentum integer</a></h3>
												</header>
												<span className="timestamp">3 hours ago</span>
											</article>
										</li>
										<li>
											<article className="post stub">
												<header>
													<h3><a href="#">Phasellus portitor lorem</a></h3>
												</header>
												<span className="timestamp">6 hours ago</span>
											</article>
										</li>
										<li>
											<article className="post stub">
												<header>
													<h3><a href="#">Magna tempus consequat</a></h3>
												</header>
												<span className="timestamp">Yesterday</span>
											</article>
										</li>
										<li>
											<article className="post stub">
												<header>
													<h3><a href="#">Feugiat lorem ipsum</a></h3>
												</header>
												<span className="timestamp">2 days ago</span>
											</article>
										</li>
									</ul>
								</section>


								<section className="4u 12u(mobile)">
									<header>
										<h2 className="icon fa-camera circled"><span className="label">Photos</span></h2>
									</header>
									<div className="row 25%">
										<div className="6u">
											<a href="#" className="image fit"><img src="images/pic10.jpg" alt="" /></a>
										</div>
										<div className="6u$">
											<a href="#" className="image fit"><img src="images/pic11.jpg" alt="" /></a>
										</div>
										<div className="6u">
											<a href="#" className="image fit"><img src="images/pic12.jpg" alt="" /></a>
										</div>
										<div className="6u$">
											<a href="#" className="image fit"><img src="images/pic13.jpg" alt="" /></a>
										</div>
										<div className="6u">
											<a href="#" className="image fit"><img src="images/pic14.jpg" alt="" /></a>
										</div>
										<div className="6u$">
											<a href="#" className="image fit"><img src="images/pic15.jpg" alt="" /></a>
										</div>
									</div>
								</section>

						</div>
						<hr />
						<div className="row">
							<div className="12u">

									<section className="contact">
										<header>
											<h3>Nisl turpis nascetur interdum?</h3>
										</header>
										<p>Urna nisl non quis interdum mus ornare ridiculus egestas ridiculus lobortis vivamus tempor aliquet.</p>
										<ul className="icons">
											<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
											<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
											<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
											<li><a href="#" className="icon fa-pinterest"><span className="label">Pinterest</span></a></li>
											<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
											<li><a href="#" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
										</ul>
									</section>


									<div className="copyright">
										<ul className="menu">
											<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
											<li>Photo by Fancycrave from Pexels</li>
										</ul>
									</div>

							</div>

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
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

// {
//   isLoggedIn
//     ? <div>
//       {/* The navbar will show these links after you log in */}
//       <Link to="/home">Home</Link>
//       <a href="#" onClick={handleClick}>Logout</a>
//     </div>
//     : <div>
//       {/* The navbar will show these links before you log in */}
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Sign Up</Link>
//     </div>
// }