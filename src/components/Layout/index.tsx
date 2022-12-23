import BackNextBtn from "../backNextBtn";
import StepsList from "../stepslist";
import "./style.scss"

type LayoutProps = {
    children: React.ReactNode;
    setSteps: Function;
    steps: number;
}

function Layout({children, setSteps, steps}: LayoutProps) {

    return (
        <div className="layoutCont">
            <h2 className="layoutTitle">Criação de usuário</h2>
            <StepsList steps={steps} />
            {children}
            <BackNextBtn setSteps={setSteps} steps={steps}/>
        </div>
    )
}

export default Layout