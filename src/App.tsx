import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import fetchUsers from './components/api/fetchUsers'
import SortMenu from './components/SortMenu/SortMenu'
import UserPageContainer from './components/UserPage/UserPageContainer'
import UsersContainer from './components/Users/UsersContainer'
import { TSorting, TUsers } from './types/types'

function App() {
   const [sorting, setSorting] = React.useState<TSorting>('city')
   const [users, setUsers] = React.useState<TUsers | null>(null)

   React.useEffect(() => {
      const getUsers = async () => {
         let users = await fetchUsers()
         setUsers(users)
      }
      getUsers()
   }, [])

   return (
      <Router>
         <div className="App">
            <div className="container">
               <SortMenu setSorting={setSorting} />
               <main className='main'>
                  <Routes>
                     <Route path="/" element={ <UsersContainer users={users} sorting={sorting} /> } />
                     <Route path="/users/:userId" element={ <UserPageContainer users={users} /> } />
                  </Routes>
               </main>
            </div>
         </div>
      </Router>
   )
}

export default App
