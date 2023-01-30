import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>The endpoint you are searching for does not exist!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
