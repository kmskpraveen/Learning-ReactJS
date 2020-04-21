import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

// class ParentComp extends PureComponent {
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'advance'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'advance'
            })
        }, 2000)
    }
    
    render() {
        console.log('====Parent component render====')
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}/> */}
                {/* <PureComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
