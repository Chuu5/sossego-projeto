import BackNextBtn from "../backNextBtn";
import Layout from "../Layout"
import "./style.scss"

type Pass2Props = {
    steps: number;
    setSteps: Function
}

function Pass2({steps, setSteps}: Pass2Props) {
    return (
        <Layout setSteps={setSteps} steps={steps}>
            <form className="secondForm" onSubmit={(e) => e.preventDefault()}>
                <div className="firstLine">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="cep">CEP</label>
                            </div>
                            <input name="cep" id="cep" type="text" autoComplete="off"/>
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="rua">Rua</label>
                            </div>
                            <input name="rua" id="rua" type="text" autoComplete="off"/>
                        </div>
                    </div>
                </div>
                <div className="secondLine">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="number">Número</label>
                            </div>
                            <input name="number" id="number" type="text" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="left2">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="bairro">Bairro</label>
                            </div>
                            <input name="bairro" id="bairro" type="text" autoComplete="off"/>
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="city">Cidade</label>
                            </div>
                            <input name="city" id="city" type="text" autoComplete="off"/>
                        </div>
                    </div>
                </div>
                <div className="thirdLine">
                    <div className="line">
                        <div className="labelCont">
                            <label htmlFor="reference">Ponto de Referência</label>
                        </div>
                        <input name="reference" id="reference" type="text" autoComplete="off"/>
                    </div>
                </div>
                <BackNextBtn setSteps={setSteps} steps={steps}/>
            </form>
        </Layout>
    )
}

export default Pass2