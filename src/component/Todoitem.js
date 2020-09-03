import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
    getStyle = () => {
        return {
            padding: '5px',
            borderBottom: '1px solid #e5e5e5',
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-Through'
                : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)} />
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind
                        (this, id)}>X</button>
                </p>
            </div>
        )
    }
}
const btnStyle = {
    background: 'red',
    color: 'white',
    borde: 'none',
    padding: '2px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

//Prop types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
