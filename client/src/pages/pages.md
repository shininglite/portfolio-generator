# pages Folder

    Welcome to the pages folder. This document is going to describe all the folders/files in the pages directory. This is one of many different architectures you can use when building any application.

    The pages folder is where you will have all your stateful components.  A stateful component is dependent on it's state object and can change it's own state. The component re-renders based on changes to it's state, and may pass down properties of it's state to child components as properties on a props object.

## Home.js File

## NoMatch.js File

## Saved.js File

    All of these files are stateful components.  Here is the strategies each one of these stateful components share.

    - These are class components (verses functional components)
    - They make API calls to the client side file /client/src/utils/API.js
    - They manage the state of the page (what is rendered on the screen).
    - They build the jsx code to be rendered with the /client/src/App.js.

### React Components

There are mainly two kinds of components

- functional - functional components are react components that DO NOT instantiate a class. This is created as a 'normal' function call.

  These components use 'hooks' to manage the state of the page. Here is a template that I think represents "hooks" strategy. TODO: Review this code.

  ```javascript
  import React, { useState, useEffect } from "react";

  function Example() {
    // count - this is the current state
    // setCount - This is a method you call to update the current state
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```

  - First we import useState and useEffect from react.
  - Create a component function
  - Set up our variables we are going to use in out jsx code using "useState". This can be a single data item, an array, an object, an array of objects. See comments above for more.
  - Setup our useEffect.
  - Now we can call the setCount to change the state and count to get the value of the state.

* Class Components - class components are react components that DO instantiate a class. Functional classes seem to be the best strategy to understand so I didn't dive into this.

In the description it says... The pages folder is where you will have all your stateful components. A stateful component is dependent on it's state object and can change it's own state. The component re-renders based on changes to it's state, and may pass down properties of it's state to child components as properties on a props object.

Here is an example:

```javascript
import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // We are setting up a function that we are going to send into the Todo component a variable that is a function.
  // The function will take in an index number (provided by the Todo component)
  // Next it will create a new array called newTodos.
  // It will set the key "isCompleted" to true.
  // Finally it will update the todo value using the "setTodo" method.
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
```

The app function has a constant variable (of a function) called "completeTodo". Here is the code...

```javascript
const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
};
```

This constant is passed into the child component "Todo"

```javascript
return (
  <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
);
```

The function is then used in the "Todo" child component

```javascript
import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default Todo;
```
