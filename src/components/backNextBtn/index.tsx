import "./style.scss"

type BackNextBtnProps = {
    steps: number;
    setSteps: Function;
    handleSubmit?: Function;
}

function BackNextBtn({steps, setSteps,handleSubmit}: BackNextBtnProps) {

    return (
        <div className="buttons">
            {steps > 1 && (
                <button type="button" onClick={() => setSteps(steps - 1)} className="back">Anterior</button>
            )}
            <button className="next"
            onClick={() => handleSubmit && handleSubmit()}>Proxímo passo</button>
        </div>
    )
}

export default BackNextBtn