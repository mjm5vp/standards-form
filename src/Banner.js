import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <header class="usa-header usa-header-extended" role="banner">
          <div class="usa-navbar">
          <div class="usa-logo" id="extended-logo">
            <em class="usa-logo-text">
              <a href="/"
                title="Home"
                aria-label="Home">
                Department of Web Design
              </a>
            </em>
          </div>
          <button class="usa-menu-btn">Menu</button>
        </div>

          <nav role="navigation" class="usa-nav">
            <div class="usa-nav-inner">
              <button class="usa-nav-close">
          <img src="/assets/img/close.svg" alt="close" />
        </button>
        <ul class="usa-nav-primary usa-accordion"><li><button class="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="extended-nav-section-one">
              <span>Section title</span>
            </button>
            <ul id="extended-nav-section-one" class="usa-nav-submenu"><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li></ul></li><li><button class="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="extended-nav-section-two">
              <span>Simple terms</span>
            </button>
            <ul id="extended-nav-section-two" class="usa-nav-submenu"><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li><li>
                      <a href="#">Subsection title</a>
                    </li></ul></li><li><a class="usa-nav-link" href="javascript:void(0)">
              <span>Distinct from each other</span>
            </a></li></ul>
              <div class="usa-nav-secondary">

            <form class="usa-search usa-search-small  js-search-form">
          <div role="search">
            <label class="usa-sr-only" for="extended-search-field-small">Search small</label>
            <input id="extended-search-field-small" type="search" name="search" />
            <button type="submit">
              <span class="usa-sr-only">Search</span>
            </button>
          </div>
          </form>


          <ul class="usa-unstyled-list usa-nav-secondary-links">

            <li class="js-search-button-container">
              <button class="usa-header-search-button js-search-button">Search</button>
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
