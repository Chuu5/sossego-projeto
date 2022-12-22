import "./style.scss"

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {

    return (
        <div className="layoutCont">
            <h2 className="layoutTitle">Criação de usuário</h2>
            {children}
        </div>
    )
}

export default Layout