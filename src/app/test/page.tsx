'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function TestPage() {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/test`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>API Test Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
