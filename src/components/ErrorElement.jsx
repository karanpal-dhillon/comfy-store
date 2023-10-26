import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
  const error = useRouteError();
  console.error(error)
  return (
    <h1 className="text-4xl text-center leading-8 tracking-wide">There was an error.</h1>
  )
}

export default ErrorElement
