import { Outlet } from 'react-router'
import './App.css'
function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="btn btn-secondary">Secondary</button>
      <Outlet></Outlet>
    </>
  )
}
export default App
