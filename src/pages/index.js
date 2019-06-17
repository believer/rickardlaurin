import '../styles/index.css'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Project from '../components/Project'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1 className="mb-8 md:mb-12 font-semibold text-2xl">rickard laurin</h1>

    <div className="flex flex-wrap -mx-2">
      <Project
        title="Clearingnummer"
        link="https://github.com/believer/clearingnummer"
      >
        <p>
          Sort codes, <em>clearingnummer</em> in Swedish, are four or five digit
          identifiers for Swedish banks. This package helps you find the bank
          related to a specific number.
        </p>
      </Project>

      <Project
        title="Telefonnummer"
        link="https://github.com/believer/telefonnummer"
      >
        <p>
          Telefonnummer is phone number in Swedish. This package formats all
          Swedish phone numbers, both mobile and landline, to a standard format.
        </p>
      </Project>

      <Project title="WCAG-color" link="https://github.com/believer/wcag-color">
        <p className="mb-3">
          According to the WHO an
          <a href="https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment">
            estimated 1.3 billion
          </a>
          people live with some form of visual impairment. This includes people
          who are legally blind and people with less than 20/20 vision.
        </p>

        <p>
          This library helps you achieve the accessibility standards for{' '}
          <strong>color contrast</strong> outlined in the{' '}
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            WCAG 2.0
          </a>
          specification
        </p>
      </Project>
    </div>
  </Layout>
)

export default IndexPage
