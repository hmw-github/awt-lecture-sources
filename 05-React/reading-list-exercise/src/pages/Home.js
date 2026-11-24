import { Link } from 'react-router-dom';

/**
 * Overview page with some statistics about the reading list.
 */
function Home({ items }) {
  // TODO 9.1: compute (derived values – no extra state needed!)
  //   - readCount: number of items with status 'read'
  //   - progress:  percentage of read items (0 if the list is empty), rounded
  //   - latest:    the last three items, newest first
  const readCount = 0;
  const progress = 0;
  const latest = [];

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
      {/* TODO 9.2: if "latest" is not empty, render a <ul> with one <li> per item containing
                    a <Link> to /list/<id>. Otherwise render:
                    <p>Your list is empty – <Link to="/search">search for articles</Link>.</p>
                    Do not forget the key prop! */}
    </section>
  );
}

export default Home;
