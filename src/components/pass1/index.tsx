import { useContext, useState } from "react";
import BackNextBtn from "../backNextBtn"
import Layout from "../Layout"
import "./style.scss"
import MyContext from "../../context/MyContext";

type Pass1Props = {
    steps: number;
    setSteps: Function
}

function Pass1({steps, setSteps}: Pass1Props) {

    const [name, setName] = useState("")
    const [errorName, setErrorName] = useState(false)

    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [errorPass, setErrorPass] = useState(false)
    
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(false)

    const [confirmErrorName, setConfirmErrorName] = useState(true)
    const [confirmErrorPass, setConfirmErrorPass] = useState(true)
    const [confirmErrorEmail, setConfirmErrorEmail] = useState(true)
    const [confirmErrorDate, setConfirmErrorDate] = useState(true)

    const { firstPassData, setFirstPassData }: any = useContext(MyContext)

    function ValidateEmail(mail: string) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
            return (false)
    }

    function checking() {
        if (name.length < 5) {
            setErrorName(true)
        } else {
            setErrorName(false)
            setConfirmErrorName(false)
        }
    
        if (pass !== confirmPass || pass.length === 0) {
            setErrorPass(true)
        } else {
            setErrorPass(false)
            setConfirmErrorPass(false)
        }
        
        if (!ValidateEmail(email)) {
            setErrorEmail(true)
        } else {
            setErrorEmail(false)
            setConfirmErrorEmail(false)
        }
    
        if (takeYear() > 2004 || !takeYear()) {
            setDateError(true)
        } else {
            setDateError(false)
            setConfirmErrorDate(false)
        }

    }

    function handleSubmit() {

        
        if (!confirmErrorEmail && !confirmErrorDate && !confirmErrorPass && !confirmErrorName) {
            setFirstPassData({name: name, email: email, password: pass, birth: selectedDate})
            setSteps(2)
        }
        
    }
    

    function takeYear() {
        let year = ""
        
        for (let i = 0; i < 4; i++) {
            year += selectedDate[i]
        }

        return Number(year)
    }

    

    const [selectedDate, setSelectedDate] = useState("")
    const [dateError, setDateError] = useState(false)

    return (
        <Layout setSteps={setSteps} steps={steps}>
            <form className="firstForm" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <div className="line">
                    <div className="labelCont">
                        <label htmlFor="name">Nome</label>
                    </div>
                    <input type="text" name="name" id="name" autoComplete="off" onChange={(e) => setName(e.currentTarget.value)}/>
                    <p className="error" style={{display: errorName ? "block" : "none"}}>O nome precisa ter pelo menos 5 caracteres</p>
                </div>

                <div className="passwords">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="pass">Senha</label>
                            </div>
                            <input type="password" name="pass" id="pass" autoComplete="off" onChange={(e) => setPass(e.currentTarget.value)} />

                            <p className="error" style={{display: errorPass ? "block" : "none"}}>As senhas precisam ser iguais</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">

                            <div className="labelCont">
                                <label htmlFor="confirmPass">Confirmar Senha</label>
                            </div>
                            <input type="password" name="confirmPass" id="confirmPass" autoComplete="off" onChange={(e) => setConfirmPass(e.currentTarget.value)} />
                            <p className="error" style={{display: errorPass ? "block" : "none"}}>As senhas precisam ser iguais</p>
                        </div>
                    </div>
                </div>

                <div className="emailBirth">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="email">Email</label>
                            </div>
                            <input type="text" name="email" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                            <p className="error" style={{display: errorEmail ? "block" : "none"}}>Email Invalido</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="birth">Data de nascimento</label>
                            </div>
                            <input type="date" onChange={(e) => setSelectedDate(e.target.value)}/>
                            <p className="error" style={{display: dateError ? "block" : "none"}}>Insira uma data de nascimento valida (precisa ter pelo menos 18 anos)</p>
                        </div>
                    </div>
                </div>
                <BackNextBtn handleSubmit={checking} setSteps={setSteps} steps={steps}/>
                
            </form>
        </Layout>
    )
}

export default Pass1