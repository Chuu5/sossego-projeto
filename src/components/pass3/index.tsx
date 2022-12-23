import BackNextBtn from "../backNextBtn";
import Layout from "../Layout";
import "./style.scss"

type Pass3Props = {
    steps: number;
    setSteps: Function
}

function Pass3({steps, setSteps}: Pass3Props) {
    return (
        <Layout setSteps={setSteps} steps={steps}>
            <form className="thirdForm" onSubmit={(e) => e.preventDefault()}>
                <div className="labelCont">
                    <label htmlFor="">
                        Nos conte mais sobre você
                    </label>
                </div>
                <textarea className="areaText"></textarea>
                <BackNextBtn setSteps={setSteps} steps={steps}/>
            </form>
        </Layout>
    )
}

export default Pass3