import { useState } from "react"
import Pass1 from "../components/pass1"

function App() {

  const [pass, setPass] = useState(1)

  function actualPass() {
    switch(pass) {
      case 1:
        return <Pass1 />
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        {actualPass()}
    </div>
  )
}

export default App
