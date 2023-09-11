import { useState } from "react" 

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`o usuario ${name} foi cadastrado com a senha ${passoword}`)
    }

    const [name, setName] = useState()
    const [passoword, setPassowrd] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" placeholder="Digite seu nome"  onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="passowrd">Senha:</label>
                    <input type="passoword" placeholder="Digite sua senha" onChange={(e) => setPassowrd(e.target.value)} />
                </div>

                <div>
                <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}


export default Form