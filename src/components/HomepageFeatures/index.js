import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Academics',
    url: './docs/Academics',
    svg: 'img/high-res/academics.svg',
    description: (
      <>
        How to navigate NYU academics.
      </>
    ),
  },
  {
    title: 'Opportunities',
    url: './docs/Opportunities',
    svg: '/img/high-res/opportunities.svg',
    description: (
      <>
        Which opportunities to pursue (and how to get them) inside and outside of NYU.
      </>
    ),
  },
  {
    title: 'Social',
    url: './docs/Social',
    svg: '/img/high-res/social.svg',
    description: (
      <>
        Other fun stuff about NYU CS.
      </>
    ),
  },
];

function Feature({ svg, title, url, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}>
          <img className={styles.featureSvg} src={svg} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
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
  );
}
