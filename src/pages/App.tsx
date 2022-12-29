import { useState } from "react"
import Pass1 from "../components/pass1"
import Pass2 from "../components/pass2"
import Pass3 from "../components/pass3"
import "react-datepicker/dist/react-datepicker.css";
import Pass4 from "../components/pass4";
import MyContext from "../context/MyContext";

export type firstPassProps = {
  name: string;
  password: string;
  email: string;
  birth: string;
}

function App() {

  const [steps, setsteps] = useState(1)

  const [firstPassData, setFirstPassData] = useState<firstPassProps>({name: "", password: "", email: "", birth: ""})

  const [secondPassData, setSecondPassData] = useState({cep: "", rua: "", numero: "", bairro: "", cidade: "", referencia: ""})

  const [thirdPassData, setThirdPassData] = useState({about: ""}) 


  function actualPass() {
    switch(steps) {
      case 1:
        return <Pass1 setSteps={setsteps} steps={steps} />
      case 2:
        return <Pass2 setSteps={setsteps} steps={steps} />
      case 3:
        return <Pass3 setSteps={setsteps} steps={steps} />
      default:
        return <Pass4 setSteps={setsteps}/>
    }
  }

  return (
    <MyContext.Provider value={{firstPassData, setFirstPassData, secondPassData, setSecondPassData, thirdPassData, setThirdPassData}}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
          {actualPass()}
      </div>
    </MyContext.Provider>
  )
}

export default App