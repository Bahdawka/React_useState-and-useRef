import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import { useState, useEffect } from 'react'
import { fetchData } from './utils/api'

interface userInterface {
  id: number
  name: string
  email: string
  username: string
}

const App = () => {
  const [users, setUsers] = useState<userInterface[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    const fetchDataandHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        console.log(data)
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataandHandleLoading()
  }, [])

  if (isLoading) {
    return <h2 className="text-center my-5">Loading...</h2>
  }

  if (error) {
    return <h2 className="text-danger">{error}</h2>
  }

  return (
    <div className="container">
      <h2 className="text-center my-5">Controlled Form via useState</h2>
      <ControlledForm />

      <hr className="my-5" />

      <h2 className="text-center my-5">Uncontrolled Form via useREF</h2>
      <UncontrolledForm />

      <hr className="my-5" />

      <h2 className="text-center my-5">Loggined Usernames</h2>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li className="text-center my-5 list-unstyled" key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App