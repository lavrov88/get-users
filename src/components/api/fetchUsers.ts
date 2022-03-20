const fetchUsers = async () => {
   let response = await fetch('https://jsonplaceholder.typicode.com/users')
   let fetchedUsers = await response.json()
   return fetchedUsers
}

export default fetchUsers