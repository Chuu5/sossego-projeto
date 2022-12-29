import { useContext } from "react"
import MyContext from "../../context/MyContext"
import "./style.scss"

type Pass4Props = {
    setSteps: Function
}

function Pass4({setSteps}: Pass4Props) {

    const { firstPassData, setFirstPassData }: any = useContext(MyContext)
    const { secondPassData, setSecondPassData }: any = useContext(MyContext)
    const { thirdPassData, setThirdPassData }: any = useContext(MyContext)
    
    return (
        <div className="pass4Cont">
            <h1 className="title">Usuário criado!</h1>
            
            <div className="miniTitleCont">
                <p className="miniTitle">Nome</p>
                <h5 className="description">{firstPassData.name}</h5>

            </div>

            <div className="miniTitleCont">
                <p className="miniTitle">Email</p>
                <h5 className="description">{firstPassData.email}</h5>
            </div>

            <div className="rua miniTitleCont">
                <div>
                    <p className="miniTitle">Rua</p>
                    <h5 className="description">{secondPassData.rua}</h5>
                </div>

                <div>
                    <p className="miniTitle">Número</p>
                    <h5 className="description">{secondPassData.numero}</h5>
                </div>
            </div>

            <div className="miniTitleCont">
                <p className="miniTitle">CEP</p>
                <h5 className="description">{secondPassData.cep}</h5>
            </div>

            <button className="pass4btn" onClick={() => setSteps(1)}>Novo usuário</button>
        </div>
    )
}

export default Pass4