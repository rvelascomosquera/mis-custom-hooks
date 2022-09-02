import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'


const init = () => {
  return JSON.parse (localStorage.getItem('todos') ) || [] // inicializo el todo con los datos guardados, si llega a estar vacio manda un arreglo vacio
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)  //useReduce utiliza init para inicializar el reducer 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
 }, [todos])
 
 const handleNewTodo = (todo) => {
   const action = {
   type: '[TODO] add Todo',
   payload: todo
   }
   dispatch( action )
 }

 const handleDeleTodo = (id) => {
   dispatch( {
     type: '[TODO] Remove Todo',
     payload: id
   } )
 }

 const handleToggleTodo = (id) => {
   dispatch ({
     type: '[TODO] Toggle Todo',
     payload: id
   })
 }

 const todosCount = (todo) => {
  dispatch ({
    type: '[TODO] Counter Todo',
    payload: todo
  })
}

 

  return {
    todos,
    handleNewTodo,
    handleDeleTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done).length
  }
}