import "./style.scss"

type BackNextBtnProps = {
    steps: number;
    setSteps: Function;
}

function BackNextBtn({steps, setSteps}: BackNextBtnProps) {

    return (
        <div className="buttons">
            {steps > 1 && (
                <button onClick={() => setSteps(steps - 1)} className="back">Anterior</button>
            )}
            <button className="next">Proxímo passo</button>
        </div>
    )
}

export default BackNextBtn