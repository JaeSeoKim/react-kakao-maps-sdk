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
    description: (
      <>
        간단하게 Map 컴포넌트 하위에 필요한 컴포넌트를 집어 넣는 것만으로 쉽게
        구현이 가능합니다!
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    image: "/img/undraw_Location_tracking_re_n3ok.svg",
    description: (
      <>
        실 기능 구현을 집중 할 수 있도록 React와 Kakao Map API는 저희가 대신
        구현 해드립니다!
      </>
    ),
  },
  {
    title: "Powered by React, TypeScript",
    image: "/img/undraw_My_current_location_re_whmt.svg",
    description: (
      <>
        TypeScript와 React를 통한 빠른 개발과 함께 React Component로 관리가
        가능합니다!
      </>
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
