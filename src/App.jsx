import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
//Notes
import { Notes } from './components/Notes/Notes'
import { NotesList } from './components/Notes/NotesList/NotesList'
import { MainView } from './components/MainView/MainView'
import { CreateNote } from './components/Notes/CreateNote/CreateNote'
import { EditNote } from './components/Notes/EditNote/EditNote'

//Tasks
import { Tasks } from './components/Tasks/Tasks'
import { TasksList } from './components/Tasks/TasksList/TasksList'
import { CreateTask } from './components/Tasks/CreateTask/CreateTask'
import { EditTask } from './components/Tasks/EditTask/EditTask';


//Redux
import { useSelector } from 'react-redux'

export function App() {
  const allNotes = useSelector(state => state.notes.allNotes);
  const allTasks = useSelector(state => state.tasks.allTasks);


  return (
    <Routes>
      <Route path='/' element={<MainView />}>
        <Route index element={<Navigate to={"/notes"} replace={true} />} />
        <Route path='/notes' element={<Notes />}>
          <Route path='/notes' element={<NotesList />} />
          <Route path='/notes/create' element={<CreateNote />} />
          {
            (allNotes.size > 0) &&
            <Route path='/notes/edit/:noteId' element={<EditNote />} />
          }
        </Route>

        <Route path='/tasks' element={<Tasks />}>
          <Route path='/tasks' element={<TasksList />} />
          <Route path='/tasks/create' element={<CreateTask />} />
          {
            <Route path='/tasks/edit/:taskId' element={<EditTask />} />
          }
        </Route>
      </Route>
    </Routes>
  )
}
