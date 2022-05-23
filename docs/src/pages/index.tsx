import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "../components/HomepageFeatures"
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Map
          className={styles.map}
          center={{ lat: 33.450701, lng: 126.570667 }}
        >
          <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
            <div
              style={{
                margin: "5px",
                color: "black",
              }}
            >
              React 💙 Kakao Map!
            </div>
          </MapMarker>
          <CustomOverlayMap
            position={{ lat: 33.4498466026352, lng: 126.57066214371602 }}
          >
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Tutorial - 5min ⏱️
              </Link>
            </div>
          </CustomOverlayMap>
        </Map>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
