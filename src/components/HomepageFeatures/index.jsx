import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import ThemedImage from '@theme/ThemedImage'

const FeatureList = [
  {
    title: 'Academics',
    url: './docs/Academics',
    svg: 'img/light/academics.svg',
    svgDark: 'img/dark/academics.svg',
    description: <>How to navigate NYU academics.</>
  },
  {
    title: 'Opportunities',
    url: './docs/Opportunities',
    svg: 'img/light/opportunities.svg',
    svgDark: 'img/dark/opportunities.svg',
    description: (
      <>
        Which opportunities to pursue (and how to get them) inside and outside
        of NYU.
      </>
    )
  },
  {
    title: 'Social',
    url: './docs/Social',
    svg: 'img/light/social.svg',
    svgDark: 'img/dark/social.svg',
    description: <>Other fun stuff about NYU CS.</>
  }
]

function Feature({ svg, svgDark, title, url, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}>
          <ThemedImage
            alt={title}
            className={styles.featureSvg}
            sources={{
              light: require(`@site/static/${svg}`).default,
              dark: require(`@site/static/${svgDark}`).default
            }}
          />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
