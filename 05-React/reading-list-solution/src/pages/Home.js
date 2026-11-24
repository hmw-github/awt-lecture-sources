import { Link } from 'react-router-dom';

/**
 * Overview page with some statistics about the reading list.
 */
function Home({ items }) {
  // derived values – no extra state needed
  const readCount = items.filter((i) => i.status === 'read').length;
  const progress = items.length ? Math.round((readCount / items.length) * 100) : 0;
  const latest = items.slice(-3).reverse();

  return (
    <section>
      <h2>Welcome!</h2>

      <div className="stats">
        <div className="card"><strong>{items.length}</strong> articles</div>
        <div className="card"><strong>{readCount}</strong> read</div>
        <div className="card"><strong>{items.length - readCount}</strong> unread</div>
      </div>
      <progress value={progress} max="100" /> {progress}% done

      <h3>Recently added</h3>
      {/* conditional rendering with the ternary operator */}
      {latest.length > 0 ? (
        <ul>
          {latest.map((item) => (
            <li key={item.id}>
              <Link to={`/list/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Your list is empty – <Link to="/search">search for articles</Link>.
        </p>
      )}
    </section>
  );
}

export default Home;
