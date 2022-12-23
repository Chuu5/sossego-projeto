import { useState } from "react"
import Pass1 from "../components/pass1"
import Pass2 from "../components/pass2"
import Pass3 from "../components/pass3"

function App() {

  const [steps, setsteps] = useState(1)

  function actualPass() {
    switch(steps) {
      case 1:
        return <Pass1 setSteps={setsteps} steps={steps} />
      case 2:
        return <Pass2 setSteps={setsteps} steps={steps} />
      case 3:
        return <Pass3 setSteps={setsteps} steps={steps} />
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        {actualPass()}
    </div>
  )
}

export default App
