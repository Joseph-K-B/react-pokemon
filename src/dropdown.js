import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        const { changeEvent, choices, label } = this.props;
        return(
            <div className='dropdown-div'>
                <label>{ label }</label>
                <select className='dropdown' onChange={ changeEvent } />
                    {choices.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
            </div>
        )
    }
}
export default Dropdown