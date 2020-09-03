import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Todos from './component/Todos'
import Header from './component/Layout/Header.js'
import AddTodo from './component/AddTodo.js'
import About from './component/pages/About.js'

import axios from 'axios'
// import { v4 as uuid } from 'uuid'


class App extends React.Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => this.setState({ todos: res.data }))

  }
  //toggle complete 
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }
  //delete todo
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => todo.id !== id)
      ]
    })
  }
  //add todo 
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   complted: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] })
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, complated: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))

  }
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete=
                {this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
