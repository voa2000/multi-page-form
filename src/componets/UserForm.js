import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName:"",
        surname:""
    }
    
    render() {
        return (
            <div>
                <h1>User Form</h1>
            </div>
        )
    }
}

export default UserForm
