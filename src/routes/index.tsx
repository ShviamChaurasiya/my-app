import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import '../App.css'
import { Link } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

// The component for the home route
function Index() {
  const navigate = useNavigate()

  const goToAbout = () => {
    navigate({ to: '/login' })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={goToAbout} className="App-link">
          Go to Login Page
        </button>
      </header>
    </div>
  )
}