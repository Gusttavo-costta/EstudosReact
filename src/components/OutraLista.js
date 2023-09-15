function OutraLista({ itens }) {

    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.lenght > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{itens}</p>
                ))) : (
                    <p>Não há itens na lista</p>
                )}

        </>
    )
}


export default OutraLista