import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section>
      <h2>404 – Page not found</h2>
      <p>
        Back to the <Link to="/">home page</Link>.
      </p>
    </section>
  );
}

export default NotFound;
