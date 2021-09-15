/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react"
import clsx from "clsx"
import styles from "./HomepageFeatures.module.css"

type FeatureItem = {
  title: string
  image: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    image: "/img/undraw_Map_dark_re_36sy.svg",
    description: <>컴포넌트를 이용하여 간단하게 구현이 가능합니다!</>,
  },
  {
    title: "Focus on What Matters",
    image: "/img/undraw_Location_tracking_re_n3ok.svg",
    description: (
      <>
        기능 구현에 집중 할 수 있도록 KakaoMap과 React Life Cycle을 연결하여
        제공 합니다!
      </>
    ),
  },
  {
    title: "Powered by React, TypeScript",
    image: "/img/undraw_My_current_location_re_whmt.svg",
    description: (
      <>TypeScript의 타입 추론과 함께 React로 쉽게 개발이 가능합니다!!</>
    ),
  },
]

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
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
