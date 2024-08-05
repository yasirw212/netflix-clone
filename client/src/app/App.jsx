import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Netflix from '../pages/Netflix/Netflix'

const App = () => {
  return (
    <Routes>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/Signup' element={<SignUp/>}></Route>
      <Route exact path='/netflix' element={<Netflix />}></Route>
    </Routes>
  )
}

export default App