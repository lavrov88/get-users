import React from 'react'
import './App.css'
import SortMenu from './components/SortMenu/SortMenu'
import UsersContainer, { TSorting } from './components/Users/UsersContainer'

function App() {
   const [sorting, setSorting] = React.useState<TSorting>('city')

   return (
      <div className="App">
         <div className="container">
            <SortMenu setSorting={setSorting} />
            <main className='main'>
               <UsersContainer sorting={sorting}/>
            </main>
         </div>
      </div>
   )
}

export default App
