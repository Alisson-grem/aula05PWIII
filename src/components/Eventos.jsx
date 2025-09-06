import { useState } from "react"
function Eventos (){

const [img, setImage] = useState("./public/Resident Evil.png")

const changeImage = () => {
    setImage("./public/Advent Group.png")
    
}
 
    return(
        <div>
            <img src={img} alt="Resident_Evil" width={700}/>
            <p>Mudar Imagem de fundo</p>
            <button onClick={changeImage}>Mudar</button>
        </div>
    )
}
export default Eventos