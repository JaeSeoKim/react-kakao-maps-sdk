import React from "react"
import MDXComponents from "@theme-original/MDXComponents"
import { Sandpack } from "@codesandbox/sandpack-react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function LiveEditor({ children }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()

  return (
    <Sandpack
      template="react-ts"
      customSetup={{
        dependencies: {
          "react-kakao-maps-sdk": "latest",
        },
      }}
      files={{
        "/App.tsx": children,
        "/useKakaoLoader.tsx": `
import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    /** 
     * ※주의※ appkey의 경우 본인의 appkey를 사용하셔야 합니다.
     * 해당 키는 docs를 위해 발급된 키 이므로, 임으로 사용하셔서는 안됩니다.
     * 
     * @참고 https://apis.map.kakao.com/web/guide/
     */
    appkey: "${customFields.KAKAOMAP_API_KEY}",
    libraries: ["clusterer", "drawing", "services"],
  })
}                
`.trim(),
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        wrapContent: true,
        editorHeight: 370,
      }}
    />
  )
}

export default {
  ...MDXComponents,
  LiveEditor,
}
