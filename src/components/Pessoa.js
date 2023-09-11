function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>profissão: {profissao}</p>
            
        </div>

    )
}

export default Pessoa