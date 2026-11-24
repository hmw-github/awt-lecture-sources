import { useEffect, useRef, useState } from 'react';
import ArticleRow from '../components/ArticleRow';

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

/**
 * Search Hacker News articles and add them to the reading list.
 * Concepts: controlled input, useEffect for data fetching (incl. cleanup),
 * loading / error states, useRef for DOM access, list rendering with keys.
 */
function Search({ items, onAdd }) {
  // text currently typed into the input field
  const [searchTerm, setSearchTerm] = useState('React');
  // term that was actually submitted – the effect depends on this one
  const [query, setQuery] = useState('React');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  // Fetch data whenever "query" changes.
  // The dependency array lists every reactive value used inside the effect,
  // so there is no endless loop and no lint warning.
  useEffect(() => {
    // "ignore" prevents race conditions: if query changes while a request is
    // still running, the cleanup function marks the old response as outdated.
    let ignore = false;

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL + encodeURIComponent(query));
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        const json = await response.json();
        if (!ignore) {
          // only keep hits that can actually be added to the list
          setResults(json.hits.filter((hit) => hit.title && hit.url));
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      ignore = true; // cleanup
    };
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault(); // no page reload
    setQuery(searchTerm.trim());
    inputRef.current?.focus();
  };

  // urls of articles already on the reading list
  const savedUrls = items.map((i) => i.url);

  let content;
  if (error) {
    content = <p className="error-text">Error fetching data: {error}</p>;
  } else if (isLoading) {
    content = <p>loading data …</p>;
  } else if (results.length === 0) {
    content = <p>No articles found for "{query}".</p>;
  } else {
    content = (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Points</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {results.map((story) => (
            <ArticleRow
              key={story.objectID}
              story={story}
              saved={savedUrls.includes(story.url)}
              onAdd={onAdd}
            />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <section>
      <h2>Search Hacker News</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="search-term">Search term</label>
        <input
          ref={inputRef}
          id="search-term"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button disabled={!searchTerm.trim().length}>search</button>
      </form>
      <h3>Articles matching "{query}"</h3>
      {content}
    </section>
  );
}

export default Search;
