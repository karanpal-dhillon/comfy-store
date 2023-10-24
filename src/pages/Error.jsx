import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="grid min-h-screen place-content-center">
        <p className="text-5xl md:text-9xl">404</p>
        <h2 className="text-5xl">Page not found</h2>
        <p>Sorry, We couldnt find the page you are looking for.</p>
        <button className="btn btn-secondary">Back Home</button>
      </div>
    );
  }
  return (
    <div className="grid min-h-screen place-content-center">
      Some error occurred
      <button className="btn btn-secondary">Back Home</button>
    </div>
  );
};

export default Error;
