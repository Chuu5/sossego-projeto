import { FormEvent, useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import BackNextBtn from "../backNextBtn";
import Layout from "../Layout";
import "./style.scss"

type Pass3Props = {
    steps: number;
    setSteps: Function
}

function Pass3({steps, setSteps}: Pass3Props) {
    
    const [about, setAbout] = useState("")
    const [aboutError, setAboutError] = useState(false)

    const { thirdPassData, setThirdPassData }: any = useContext(MyContext)

    function checking () {
        if (about.length < 20) {
            setAboutError(true)
        } else {
            setAboutError(false)
        }
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (!aboutError) {
            setThirdPassData({about: about})
            setSteps(4)
        }
    }


    return (
        <Layout setSteps={setSteps} steps={steps}>
            <form className="thirdForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="labelCont">
                    <label htmlFor="">
                        Nos conte mais sobre você
                    </label>
                </div>
                <textarea className="areaText" onChange={(e) => setAbout(e.target.value)}></textarea>
                <p className="error" style={{display: aboutError ? "block" : "none"}}>Precisa de no minimo 20 caracteres</p>
                <BackNextBtn handleSubmit={checking} setSteps={setSteps} steps={steps}/>
            </form>
        </Layout>
    )
}

export default Pass3