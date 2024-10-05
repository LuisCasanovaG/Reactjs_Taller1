import { useState } from "react"
 import './estilos.css'

export default function Input(){
    const[mensaje,setMensaje]= useState("");
    const [palindromo,setPalindromo]=useState(false);

    const capicua=()=>{

        if(mensaje===""){
            alert("Por favor ingresa una palabra");
             
            //setPalindromo("Por favor ingresa una palabra");
            return;
        }else{
           
            //se limpia la palabra en caso de tener espacios y caracteres especiales
        const limpiarPalabra=mensaje.replace(/\s_/g, "").toLowerCase();
        
        //pone la palabra alreves 
        const revesPalabra=limpiarPalabra.split("").reverse().join("");

        setPalindromo (revesPalabra===limpiarPalabra);
        //setPalindromo (`La palabra ${mensaje} ${palindromo ? 'Es Palindromo' : 'No es Palindromo'}`);
        return;
        }
    }

    return(
       <div>
        <h1>Verificador de Palindromos</h1>
        <input
        type="text"
        value={mensaje}
        placeholder="Ingrese una Palabra"
        onChange={evento=> setMensaje(evento.target.value)}
       
        />
        {/* <h1>{mensaje}</h1> */}
        <div className="contenedor-verificacion">
        {/* <h2 className="texto-verificar">Presione el boton para confirmar si la palabra es Palindroma {mensaje}</h2> */}
    <button onClick={capicua}>Verificar</button>
    {/* <button onClick={()=>setPalindromo(capicua(mensaje))}>Verificar</button> */}
      
          {/*  <h2> {palindromo}</h2> */}
         
    </div>
    {//palindromo&&
      <h2 className="palindromo">
                La Palabra "{mensaje}" {palindromo ? "es" : "no es"} un Palindromo.
            </h2>}
       </div>
      
    );

} 
