import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {

    const { nomeDoUsuario } = useUsuarioLogado();

    return(
        <div>
            <p>Dashboard</p>

            <div>
                <p>Bem-vindo: {nomeDoUsuario}</p>
            </div>

            <Link to="/entrar">Login</Link>
        </div>
    );

}