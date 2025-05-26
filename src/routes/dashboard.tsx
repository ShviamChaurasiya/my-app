import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

type UserType = {
  name?: string
  email?: string
} | null

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const [user, setUser] = useState<UserType>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/user', {
      credentials: 'include',
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data')
        }
        return res.json()
      })
      .then((data) => {
        console.log('Fetched user:', data)
        setUser(data)
      })
      .catch((err) => {
        console.error('Failed to fetch user', err)
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {loading && <p className="mt-2">Loading user data...</p>}

      {!loading && user && (
        <p className="mt-2 text-lg">
          Welcome, {user.name || 'User'}!
        </p>
      )}

      {!loading && !user && (
        <p className="mt-2 text-red-600">No user data found. Please login.</p>
      )}
    </div>
  )
}
