
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState(" ")
  const [nameError, setNameError] = useState("")

  const [email, setEmail] = useState("@")
  const [emailError, setEmailError] = useState("")

  const [password, setPassword] = useState("asdasda")
  const [passwordError, setPasswordError] = useState("")
  const style = {
    color : "red"
  }

  useEffect(() => {
    if (name.length === 0) {
      setNameError("Name is required")
    }
    else {
      setNameError("")
    }
  }, [name])

  useEffect(() => {
    if (email.includes("@")) {
      setEmailError("");
    }
    else {
      setEmailError("Invalid emial format")
    }
  }, [email])

  useEffect(() => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters")
    }
    else {
      setPasswordError("")
    }
  }, [password])
  return (
    <div>

      <form onSubmit={(e)=>checkuser(e)}>
        <label htmlFor="name">Name: </label>
        <input onChange={(e) => setName(e.target.value)} type="text" id="name" />
        {
          nameError && <p style={style}>{nameError}</p>
        }
        <label htmlFor="email">Email: </label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
        {
          emailError && <p style={style}>{ emailError}</p>
        }
        <label htmlFor="password">Password: </label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
        {
          passwordError && <p style={style}>{passwordError}</p>
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
