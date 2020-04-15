import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggenIn: true
        }
    }
    
    render() {
        return this.state.isLoggenIn && <div>Welcome advance</div>
        // return (
        //     this.state.isLoggenIn ? (
        //         <div>Welcome advance</div>
        //     ) : (
        //         <div>Welcome Guest</div>
        //     )
        // )
        // let message
        // if(this.state.isLoggenIn) {
        //     message = <div>Welcome advance</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }        
        // return <div>{message}</div>
        // if(this.state.isLoggenIn) {
        //     return <div>Welcome advance</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome advance</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
