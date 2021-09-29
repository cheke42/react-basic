import React from 'react'

export default class GitTest extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>Compomnente Para testear Git. {this.props.saludo} </div>
        )
    }
}