import React from "react"

// __ A traves de arrow function
const Componente = props => <h2>{props.msg}</h2>

/* //__ A traves de function
    function Componente(props){
    return <h2>{props.msg}</h2>
}*/

/*  //__ A traves de Clase
    class Componente extends React.Component{
    render(){
       return <h2>{this.props.msg}</h2> 
    }
}*/

export default Componente