import { type ChangeEvent, type FormEvent, useState } from 'react'

interface FormData {
  username: string
  password: string
}

const initialFormData: FormData = {
  username: '',
  password: ''
}

const ControlledForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          value={formData.username}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder="Enter your username" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Enter your password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default ControlledForm