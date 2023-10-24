import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="text-center">
          <p className="text-5xl font-semibold text-secondary md:text-9xl">
            404
          </p>
          <h1 className="text-3xl sm:text-5xl mt-4 font-bold tracking-tight">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, We couldnt find the page you are looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid min-h-screen place-items-center px-8">
      <div className="text-center">
        <h4 className="text-center font-bold text-4xl">Some error occurred</h4>
        <div className="mt-10">
          <Link to="/" className="btn btn-secondary">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
