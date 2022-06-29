import { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const handleLogin = () => {

        console.log(email);
        console.log(senha);
        

    }

    return(
        <div>
            <h1>TELA DE LOGIN</h1>

            <form>
                <label>
                    <span>E-mail: </span>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value)} placeholder="Digite seu E-mail"/>
                </label>

                <label>
                    <span>Senha: </span>
                    <input value={senha} type="password" onChange={e => setSenha(e.target.value)} 
                    placeholder="Digite sua Senha"/>
                </label>

                <button type="button" onClick={handleLogin}>
                    Entrar
                </button>
            </form>
        </div>
    );

}