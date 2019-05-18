import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <div className="site-wrapper">
        <header className="site-head">
          <div className="site-head-container">
            <Link className="nav-burger" to={`/`}>
              <div
                className="hamburger hamburger--collapse"
                aria-label="Menu"
                role="button"
                aria-controls="navigation"
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </Link>
            <nav id="swup" class="site-head-left">
              <ul className="nav" role="menu">
                <li className="nav-home nav-current" role="menuitem">
                  <a href="https://london.ghost.io/">Home</a>
                </li>
                <li className="nav-about" role="menuitem">
                  <a href="https://london.ghost.io/about/">About</a>
                </li>
                <li className="nav-elements" role="menuitem">
                  <a href="https://london.ghost.io/elements/">Elements</a>
                </li>
              </ul>
            </nav>
            <div className="site-head-center">
              <Link className="site-head-logo" to={`/`}>
                {title}
              </Link>
            </div>
            <div className="site-head-right">
              <div className="social-links">
                <a
                  href="https://www.facebook.com/ghost"
                  title="Facebook"
                  target="_blank"
                  rel="noopener"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/tryghost"
                  title="Twitter"
                  target="_blank"
                  rel="noopener"
                >
                  Twitter
                </a>
                <a
                  href="https://feedly.com/i/subscription/feed/https://london.ghost.io/rss/"
                  title="RSS"
                  target="_blank"
                  rel="noopener"
                >
                  RSS
                </a>
              </div>
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main">
          <div id="swup" className="transition-fade">
            {children}
          </div>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
