import { FormEvent, useState } from "react";
import BackNextBtn from "../backNextBtn"
import Layout from "../Layout"
import "./style.scss"

type Pass1Props = {
    steps: number;
    setSteps: Function
}

function Pass1({steps, setSteps}: Pass1Props) {

    const [name, setName] = useState("")
    const [errorName, setErrorName] = useState(false)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        
        console.log(name);
         
    }

    return (
        <Layout setSteps={setSteps} steps={steps}>
            <form className="firstForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="line">
                    <div className="labelCont">
                        <label htmlFor="name">Nome</label>
                    </div>
                    <input type="text" name="name" id="name" autoComplete="off" onChange={(e) => setName(e.currentTarget.value)}/>
                    <p className="error" style={{display: errorName ? "block" : "none"}}>O nome precisa ter pelo menos 4 caracteres</p>
                </div>

                <div className="passwords">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="pass">Senha</label>
                            </div>
                            <input type="password" name="pass" id="pass" autoComplete="off" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">

                            <div className="labelCont">
                                <label htmlFor="confirmPass">Confirmar Senha</label>
                            </div>
                            <input type="password" name="confirmPass" id="confirmPass" autoComplete="off" />
                        </div>
                    </div>
                </div>

                <div className="emailBirth">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="email">Email</label>
                            </div>
                            <input type="text" name="email" id="email" autoComplete="off" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="birth">Data de nascimento</label>
                            </div>
                            <input type="text" name="birth" id="birth" autoComplete="off" />
                        </div>
                    </div>
                </div>
                <BackNextBtn setSteps={setSteps} steps={steps}/>
                
            </form>
        </Layout>
    )
}

export default Pass1