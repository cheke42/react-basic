import React from 'react'

export default function Propiedades(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'True' : 'False'}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{JSON.stringify(props.objeto)}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps = {
    porDefecto: "Las Props"
}