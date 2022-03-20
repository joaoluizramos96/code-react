import { useState } from 'react' // Pega o valor para enviar pro back-end

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault() // Não atualiza a página
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`) // Pega o valor para enviar pro back-end

    }

    const [name, setName] = useState() // // Pega o valor para enviar pro back-end
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)} // Pega o valor para enviar pro back-end
                    />
                </div>
                <div>
                <label htmlFor="password">Senha:</label>
                    <input type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)} // Pega o valor para enviar pro back-end
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form