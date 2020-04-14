import React from 'react'

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hi Advance</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {className: 'dummyClass', id: 'hello'}, 
        React.createElement('h1', null, 'Hi advance'))
}

export default Hello