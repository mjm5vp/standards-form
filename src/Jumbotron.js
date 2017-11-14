import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
  render() {
    return (
      <section class="usa-hero">
        <div class="usa-grid">
          <div class="usa-hero-callout usa-section-dark">
            <h2>

                <span class="usa-hero-callout-alt">Hero callout:</span>

              Call attention to a current priority
            </h2>


            <a class="usa-hero-link" href="javascript:void(0)">Link to more about that priority</a>

            <Link to='/form' class="usa-button usa-button-big">
              Continue to Form
            </Link>

          </div>
        </div>
      </section>
    )
  }
}

export default Jumbotron;
