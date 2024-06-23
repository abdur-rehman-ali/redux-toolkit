import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <h1>Welcome to my store</h1>
      <Link to={'/products'} > Products</Link>
      <Link to={'/cart'} > Cart</Link>
    </>
  )
}

export default App
