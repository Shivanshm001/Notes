import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
//Notes
import Notes from './components/Notes/Notes'
import NotesList from './components/Notes/NotesList/NotesList'
import MainView from './components/MainView/MainView'
import CreateNote from './components/Notes/CreateAndEditNote/CreateNote/CreateNote'
import EditNote from './components/Notes/CreateAndEditNote/EditNote/EditNote'

//Tasks
import Tasks from './components/Tasks/Tasks'
//Redux
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const allNotes = useSelector(state => state.notes.allNotes);


  return (
    <Routes>
      <Route path='/' element={<MainView />}>
        <Route path='/notes' element={<Notes />}>
          <Route path='/notes' element={<NotesList />} />
          <Route path='/notes/create' element={<CreateNote />} />
          {
            (allNotes.size > 0) &&
            <Route path='/notes/edit/:noteId' element={<EditNote />} />
          }
        </Route>

        <Route path='/tasks' element={<Tasks />}>

        </Route>
      </Route>
    </Routes>
  )
}

export default App