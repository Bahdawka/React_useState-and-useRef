import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'

const App = () => {
  return (
    <div className="container">
      <h2 className="text-center my-5">Controlled Form</h2>
      <ControlledForm />

      <hr className="my-5" />

      <h2 className="text-center my-5">Uncontrolled Form</h2>
      <UncontrolledForm />
    </div>
  )
}

export default App