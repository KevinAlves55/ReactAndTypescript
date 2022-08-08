import { useRef, useState } from "react";
import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);

    const { nomeDoUsuario } = useUsuarioLogado();
    

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleCleaning = () => {

        setEmail("");
        setSenha("");
        inputEmailRef.current?.focus()

    }
    
    const handleLogin = () => {

        if (email === "" || senha === "") {

            alert("Preencha todos os campos");
            return;
        
        } else {

            console.log(email);
            console.log(senha);
        
        }
        
    }

    return(
        <div>
            <h1>TELA DE LOGIN</h1>

            <p>Olá {nomeDoUsuario}</p>

            <form action="" name="form-login">
                
                <InputLogin
                    label="E-mail"
                    value={email}
                    type="email"
                    placeholder="Digite seu e-mail"
                    name="email"
                    onChange={setEmail}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                    ref={inputEmailRef}
                />

                <InputLogin
                    label="Senha"
                    value={senha}
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    onChange={setSenha}
                    ref={inputPasswordRef}
                />

                <div>
                    <ButtonLogin type="button" onClick={handleLogin}>Entrar</ButtonLogin>
                    <ButtonLogin onClick={handleCleaning} type="reset">Limpar</ButtonLogin>
                </div>

            </form>
        </div>
    );

}