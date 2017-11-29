import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="usa-footer usa-footer-big" role="contentinfo">
        <div className="usa-grid usa-footer-return-to-top">
          <a href="#">Return to top</a>
        </div>
        <div className="usa-footer-primary-section">
          <div className="usa-grid">
            <nav className="usa-footer-nav usa-width-two-thirds">
              <ul className="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className="usa-footer-primary-link">
                  <h4>Topic</h4>
                </li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link that's a bit longer than most of the others</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
              </ul>
              <ul className="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className="usa-footer-primary-link">
                  <h4>Topic</h4>
                </li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link that's pretty long</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
              </ul>
              <ul className="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className="usa-footer-primary-link">
                  <h4>Topic</h4>
                </li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
              </ul>
              <ul className="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className="usa-footer-primary-link">
                  <h4>Topic</h4>
                </li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
                <li><a href="javascript:void(0);">Secondary link</a></li>
              </ul>
            </nav>

            <div className="usa-sign_up-block usa-width-one-third">
              <h3 className="usa-sign_up-header">Sign up</h3>

              <label className="" htmlFor="email" id="">Your email address</label>
              <input id="email" name="email" type="email" />

              <button type="submit">Sign up</button>
            </div>
          </div>
        </div>

        <div className="usa-footer-secondary_section usa-footer-big-secondary-section">
          <div className="usa-grid">
            <div className="usa-footer-logo usa-width-one-half">
              <img className="usa-footer-big-logo-img" src="/assets/img/logo-img.png" alt="Logo image" />
              <h3 className="usa-footer-big-logo-heading">Name of Agency</h3>
            </div>
            <div className="usa-footer-contact-links usa-width-one-half">
              <a className="usa-link-facebook" href="javascript:void(0);">
                <span>Facebook</span>
              </a>
              <a className="usa-link-twitter" href="javascript:void(0);">
                <span>Twitter</span>
              </a>
              <a className="usa-link-youtube" href="javascript:void(0);">
                <span>YouTube</span>
              </a>
              <a className="usa-link-rss" href="javascript:void(0);">
                <span>RSS</span>
              </a>
              <h3 className="usa-footer-contact-heading">Agency Contact Center</h3>
              <address>
                <div className="usa-footer-primary-content usa-footer-contact_info">
                  <p>
                    <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                  </p>
                </div>
                <div className="usa-footer-primary-content usa-footer-contact_info">
                  <p><a href="mailto:info@agency.gov">info@agency.gov</a></p>
                </div>
              </address>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
