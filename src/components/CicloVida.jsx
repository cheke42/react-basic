import React from 'react'

class Reloj extends React.Component{
    constructor(props){
        super(props)
    }

    /** Cuando se desmonte */
    componentWillUnmount(){
        console.log(3, 'El componente ha sido eliminado de DOM')
    }

    render(){
        return  <h3>{this.props.hora}</h3>
    }

    
}

export default class CicloVida extends React.Component{
    constructor(props){
        super(props)
        console.log(0,"El componente se inicializa, aun no está en el DOM")

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null
    }

    /** Posterior al constructor */
    componentDidMount(){
        console.log(1,'El componente ya se encuentra en el DOM')
    }

    /** Cuando actualice. Quedan las props y el estado anterior */
    componentDidUpdate(prevProps,prevState){
        console.log(2,"El estado o las props han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }

    

    tictac = () =>{
        this.temporizador = setInterval(() =>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        },1000)
    }

    iniciar = () =>{
        this.tictac()
        this.setState({
            visible: true
        })
    }

    detener = () =>{
        clearInterval(this.temporizador)
        this.setState({
            visible: false
        })
    }

    render(){
        console.log(4,"El componente se dibuja o redibuja")
        return(
            <>
            <h2>Ciclo de vida de los Componentes de Clase</h2>
            {this.state.visible && <Reloj hora={this.state.hora}/>}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }


}