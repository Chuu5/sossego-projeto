import { FormEvent, useContext, useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";
import MyContext from "../../context/MyContext";
import BackNextBtn from "../backNextBtn";
import Layout from "../Layout"
import "./style.scss"

type Pass2Props = {
    steps: number;
    setSteps: Function
}

function Pass2({steps, setSteps}: Pass2Props) {

    const [cep, setCep] = useState("")
    const [cepError, setCepError] = useState(false)

    const apiLink = `https://viacep.com.br/ws/${cep}/json/`

    const [rua, setRua] = useState("")
    const [ruaError, setRuaError] = useState(false)

    const [bairro, setBairro] = useState("")
    const [bairroError, setBairroError] = useState(false)

    const [cidade, setCidade] = useState("")
    const [cidadeError, setCidadeError] = useState(false)

    const [numero, setNumero] = useState("")
    const [numeroError, setNumeroError] = useState(false)

    const [reference, setReference] = useState("")
    const [referenceError, setReferenceError] = useState(false)


    useEffect(() => {
        if (cep.length === 9) {
            fetch(apiLink).then((res) => res.json()).then((data) => {
                if (!data.erro) {
                    setRua(data.logradouro)
                    setCidade(data.localidade)
                    setBairro(data.bairro)
                    setCepError(false)
                } else {
                    setCepError(true)
                }
            })
        }
    }, [cep])

    function checking() {
        if (numero.length === 0 || numero.length > 4) {
            setNumeroError(true)
        } else {
            setNumeroError(false)
        }

        if (cep.length < 9) {
            setCepError(true)
        } else {
            setCepError(false)
        }

        if (rua.length === 0) {
            setRuaError(true)
        } else {
            setRuaError(false)
        }

        if (bairro.length === 0) {
            setBairroError(true)
        } else {
            setBairroError(false)
        }

        if (cidade.length === 0) {
            setCidadeError(true)
        } else {
            setCidadeError(false)
        }

        if (reference.length === 0) {
            setReferenceError(true)
        } else {
            setReferenceError(false)
        }
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        let validate = !referenceError && !ruaError && !cepError && !bairroError && !numeroError && !cidadeError

        
        if (validate) {
            setSecondPassData({cep: cep, rua: rua, bairro: bairro, numero: numero, referencia: reference, cidade: cidade})
            setSteps(3)
        }
    }
    

    const { secondPassData, setSecondPassData }: any = useContext(MyContext)

    return (
        <Layout setSteps={setSteps} steps={steps}>
            <form className="secondForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="firstLine">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="cep">CEP</label>
                            </div>
                            <ReactInputMask 
                            mask={"99999-999"} 
                            maskChar={null}
                            onChange={(e) => setCep(e.target.value)} 
                            />
                            <p className="error" style={{display: cepError ? "block" : "none"}}>Cep Invalido</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="rua">Rua</label>
                            </div>
                            <input value={cep.length === 9 ? rua : undefined} name="rua" id="rua" type="text" autoComplete="off"/>
                            <p className="error" style={{display: ruaError ? "block" : "none"}}>Rua Invalida</p>
                        </div>
                    </div>
                </div>
                <div className="secondLine">
                    <div className="left">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="number">Número</label>
                            </div>
                            <input 
                            name="number" 
                            id="number" 
                            type="number" 
                            autoComplete="off"
                            onChange={(e) => setNumero(e.target.value)}
                            />

                            <p className="error" style={{display: numeroError ? "block" : "none"}}>Numero Invalido</p>
                        </div>
                    </div>
                    <div className="left2">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="bairro">Bairro</label>
                            </div>
                            <input value={cep.length === 9 ? bairro : undefined} name="bairro" id="bairro" type="text" autoComplete="off"/>
                            <p className="error" style={{display: bairroError ? "block" : "none"}}>Bairro Invalido</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="line">
                            <div className="labelCont">
                                <label htmlFor="city">Cidade</label>
                            </div>
                            <input value={cep.length === 9 ? cidade : undefined} name="city" id="city" type="text" autoComplete="off"/>

                            <p className="error" style={{display: cepError ? "block" : "none"}}>Cidade Invalida</p>
                        </div>
                    </div>
                </div>
                <div className="thirdLine">
                    <div className="line">
                        <div className="labelCont">
                            <label htmlFor="reference">Ponto de Referência</label>
                        </div>
                        <input name="reference" id="reference" type="text" autoComplete="off" 
                        onChange={(e) => setReference(e.target.value)}/>
                         <p className="error" style={{display: referenceError ? "block" : "none"}}>Ponto de referencia Invalido</p>
                    </div>
                </div>
                <BackNextBtn handleSubmit={checking} setSteps={setSteps} steps={steps}/>
            </form>
        </Layout>
    )
}

export default Pass2
