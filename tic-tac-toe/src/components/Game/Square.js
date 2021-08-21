import React from '../../client/src/node_modules/src/components/node_modules/react';

export default function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}