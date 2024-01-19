import { Link } from "react-router-dom"
import { samples } from "./pages/sampleList"

function App() {
  return (
    <>
      <h1>react-kakao-maps-sdk dev server</h1>
      <p>
        <Link to={"/dev"}>dev page</Link>
      </p>
      <hr />
      <h2>sample list</h2>
      {samples.map((sample) => (
        <p key={sample.path}>
          <Link to={`/samples/${sample.path!}`}>{sample.path!}</Link>
        </p>
      ))}
    </>
  )
}

export default App
