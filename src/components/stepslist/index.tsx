import "./style.scss"

type StepsListProps = {
    steps: number;
}

function StepsList({steps}: StepsListProps) {

    return (
        <div className="stepsCont">
            <div className="step">
                <div className="stepImg">
                    <img src={steps > 1 ? "/assets/IdentificandoVerde.png" : "/assets/Identificando.png"} alt="Identificando Icone" />
                </div>
                <div className="stepDesc">
                    Identificação do Usuário
                </div>
            </div>

            <div className="step">
                <div className="stepImg">
                    <img src={steps === 1 ? "/assets/Address.png" : steps === 2 ? "/assets/AddressPurple.png" : "/assets/AddressVerde.png"} alt="Endereço Icone" />
                </div>
                <div className="stepDesc">
                    Endereço do usuário
                </div>
            </div>

            <div className="step">
                <div className="stepImg">
                    <img src={steps === 3 ? "/assets/AboutPurple.png" : "/assets/About.png"} alt="Sobre Você Icone" />
                </div>
                <div className="stepDesc">
                    Sobre Você
                </div>
            </div>
        </div>
    )
}

export default StepsList