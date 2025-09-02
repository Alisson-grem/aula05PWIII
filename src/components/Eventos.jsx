function Eventos ({numero}){

    function meuEvento(){
        console.log(`Ops...Fui Ativado!!! ${numero}`)
    }
    return(
        <>
            <p>Clique para disparar um Evento:</p>
            <button onClick={meuEvento}>ATIVAR</button>
        </>
    )
}
export default Eventos