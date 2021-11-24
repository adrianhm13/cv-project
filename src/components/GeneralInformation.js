import React, { Component } from 'react'

class GeneralInformation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            firstName: ""
        }
    }
    

    render() {
        console.log(this.props)
        const {firstName} = this.props
        return (
            <div>
                <input type="text" value={firstName} onChange={this.props.handleFirstName}></input>
            </div>
        )
    }
}

export default GeneralInformation
