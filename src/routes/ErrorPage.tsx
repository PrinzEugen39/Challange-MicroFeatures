import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError() as Error
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      
    </div>
  )
}
