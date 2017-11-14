import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <header className="usa-header usa-header-extended" role="banner">
          <div className="usa-navbar">
          <div className="usa-logo" id="extended-logo">
            <em className="usa-logo-text">
              <a href="/"
                title="Home"
                aria-label="Home">
                Department of Web Design
              </a>
            </em>
          </div>
          <button className="usa-menu-btn">Menu</button>
        </div>

          <nav role="navigation" className="usa-nav">
            <div className="usa-nav-inner">
              <button className="usa-nav-close">
          <img src="/assets/img/close.svg" alt="close" />
        </button>
        <ul className="usa-nav-primary usa-accordion"><li><button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="extended-nav-section-one">
              <span>Section title</span>
            </button>
            <ul id="extended-nav-section-one" className="usa-nav-submenu"><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li></ul></li><li><button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="extended-nav-section-two">
              <span>Simple terms</span>
            </button>
            <ul id="extended-nav-section-two" className="usa-nav-submenu"><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li></ul></li><li><a className="usa-nav-link" href="javascript:void(0)">
              <span>Distinct from each other</span>
            </a></li></ul>
              <div className="usa-nav-secondary">

            <form className="usa-search usa-search-small  js-search-form">
          <div role="search">
            <label className="usa-sr-only" htmlFor="extended-search-field-small">Search small</label>
            <input id="extended-search-field-small" type="search" name="search" />
            <button type="submit">
              <span className="usa-sr-only">Search</span>
            </button>
          </div>
          </form>


          <ul className="usa-unstyled-list usa-nav-secondary-links">

            <li className="js-search-button-container">
              <button className="usa-header-search-button js-search-button">Search</button>
            </li>


            <li>
              <a href="">
                Secondary priority link
              </a>
            </li>

            <li>
              <a href="">
                Easy to comprehend
              </a>
            </li>

          </ul>
        </div>

            </div>
          </nav>
        </header>
    )
  }
}

export default Banner;
