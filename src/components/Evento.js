import Button from "./evento/Button"


function Evento() {

    function meuEvento() {
        console.log(`ativando primeiro evento! `)
    }

    function segundoEvento(){
        console.log("ativando segundo evento")
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
            
        </div>
    )
}

export default Evento