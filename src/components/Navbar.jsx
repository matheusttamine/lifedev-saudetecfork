import React from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [user, setUser] = useState({name:'Victor', idade:42})

  return (
    <>
    <nav className={styles.navbar}>
        <p>O usuário {user.name} tem {user.idade} anos </p>     
        <button onClick={() => setUser((prevUser) => ({...prevUser, idade: prevUser.idade + 1}))}>Alterar idade</button>   
    </nav>
    </>
  )
}

export default Navbar