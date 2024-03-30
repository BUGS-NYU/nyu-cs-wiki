import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import ThemedImage from '@theme/ThemedImage'

const FeatureList = [
  {
    title: 'Academics',
    url: './docs/Academics',
    image: 'img/feature_academics.png',
    description: <>How to navigate NYU academics</>
  },
  {
    title: 'Opportunities',
    url: './docs/Opportunities',
    image: 'img/feature_opportunities.png',
    description: <>Opportunities to pursue inside and outside of NYU</>
    
  },
  {
    title: 'Recreation',
    url: './docs/Recreation',
    image: 'img/feature_recreation.png',
    description: <>Other fun stuff about NYU</>
  }
]

function Feature({ image, title, url, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}>
          <img src={image} alt={title} />
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
