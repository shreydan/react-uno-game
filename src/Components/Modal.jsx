import React from 'react'
import './Modal.css'

function Modal(props) {
    return (
        <div className="Modal" style={{display: props.visible ? 'flex' : 'none'}}>
            <div id="msg">{props.text}</div>
            <div id="esc">Press Esc to exit</div>
        </div>
    )
}

export default Modal
