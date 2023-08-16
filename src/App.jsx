import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotesList from './components/NotesList/NotesList'
import MainView from './components/MainView/MainView'
import CreateNote from './components/CreateNote/CreateNote'
import EditNote from './components/EditNote/EditNote'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const allNotes = useSelector(state => state.notes.allNotes);


  return (
    <Routes>
      <Route path='/' element={<MainView />}>
        <Route path='/' element={<NotesList />} />
        <Route path='/create' element={<CreateNote />} />
        {
          allNotes.length > 0 &&
          <Route path='/edit/:noteId' element={<EditNote />} />
        }
      </Route>
    </Routes>
  )
}

export default App