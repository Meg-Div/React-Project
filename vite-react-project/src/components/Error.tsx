import { Link } from "react-router-dom";

export function Error(): JSX.Element {
  return (
    <div className="md:bg-gradient-to-r from-summer to-wheat">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center content-center">
        <div className="bg-white shadow overflow-hidden pb-10 flex flex-col items-center justify-center content-center	">
          <div className="text-center pt-8 ">
            <h1
              id="noto"
              className="text-9xl font-bold text-summer text-center"
            >
              404
            </h1>
          </div>
          <h1 id="noto" className="text-6xl font-medium py-8 text-center">
            Page not found
          </h1>

          <p id="noto" className="text-2xl pb-8 px-12 font-medium text-center">
            The page you are looking for does not exist.
          </p>
          <Link to={`/`}>
            <button className="bg-summer hover:gull text-white font-bold py-2 px-4 border border-gull rounded">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
