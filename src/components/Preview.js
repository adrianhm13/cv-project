import React, { Component } from 'react'


class Preview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
       }
    }


    render() {
        const {firstName} = this.props
        return (
            <div>
                <h1>{firstName}</h1>
            </div>
        )
    }
}

export default Preview
