import React from 'react';
import Todo from './components/todo/todo.js'
import SettingsContext from '../src/context/site.js'

export default function App() {
    return (
      <SettingsContext>
        <Todo />
      </SettingsContext>
    )
}