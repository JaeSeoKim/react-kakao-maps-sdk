import React from "react"
import SiteMetadata from "@theme-original/SiteMetadata"
import { getSandpackCssText } from "@codesandbox/sandpack-react"

export default function SiteMetadataWrapper(props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
        id="sandpack"
        key="sandpack-css"
      />
      <SiteMetadata {...props} />
    </>
  )
}
