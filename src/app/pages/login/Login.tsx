import { useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
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

            <form action="" name="form-login">
                
                <InputLogin
                    label="E-mail"
                    value={email}
                    type="email"
                    placeholder="Digite seu e-mail"
                    onChange={setEmail}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    value={senha}
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={setSenha}
                    ref={inputPasswordRef}
                />

                <button type="button" onClick={handleLogin}>
                    Entrar
                </button>
            </form>
        </div>
    );

}