import React from 'react'

export class EventosES6 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contador:0
        }

        // binding para problema en this
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e){
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e){
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// Property Initializer
export class EventosES7 extends React.Component{
    state = {
        contador: 0
    }
    
    // Arrow functions

    sumar =(e) =>{
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar= (e) =>{
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

function Boton(props){
    return (<button onClick={props.myOnClick}>Botón hecho componente</button>)
}

export class MasSobreEventos extends React.Component{

    handleClick = (e,msg) =>{
        console.log(e)
        console.log(e.nativeEvent.target)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(msg)
    }

    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e,"Hola pasando parametro del evento")}>Saludar</button>
                {/** Evento personalizado */}

                {/**<Boton onClick={(e) => this.handleClick(e,"Hola pasando parametro del evento")}/>*/}
                <Boton myOnClick={(e) => this.handleClick(e,"Hola pasando parametro del evento")}/>
            </div>
        )
    }
}