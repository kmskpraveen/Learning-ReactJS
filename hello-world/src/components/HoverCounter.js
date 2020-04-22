import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    
    render() {
        const { name, count, incrementCount } = this.props
        // const { count } = this.state
        return (
            <div>
                <h1 onMouseOver={incrementCount}>{name} Hovered {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter)
