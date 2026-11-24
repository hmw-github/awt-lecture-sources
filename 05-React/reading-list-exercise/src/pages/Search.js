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
  // TODO 7.5: create a ref for the input field with useRef

  // TODO 7.1: write an effect that fetches API_URL + encodeURIComponent(query)
  //   - set isLoading to true before and to false after the request
  //   - store json.hits in results (keep only hits that have a title AND a url)
  //   - store the error message in "error" if the request fails or !response.ok
  //   - which dependencies does the effect have?
  // TODO 7.2: avoid race conditions: declare "let ignore = false" inside the effect,
  //           return a cleanup function that sets ignore = true and only update
  //           the state if ignore is still false.

  const handleSubmit = (event) => {
    // TODO 7.3: prevent the page reload and set query to the trimmed searchTerm.
    // TODO 7.5: put the focus back into the input field (use the ref)
  };

  // urls of articles already on the reading list
  const savedUrls = items.map((i) => i.url);

  // TODO 7.4: conditional rendering - assign to "content"
  //   - error     -> <p className="error-text">Error fetching data: ...</p>
  //   - isLoading -> <p>loading data …</p>
  //   - no result -> <p>No articles found for "...".</p>
  //   - otherwise -> a <table> with header columns Title, Author, Points and an empty one,
  //                  and one <ArticleRow> per result:
  //                  key={story.objectID} story={story} saved={...} onAdd={onAdd}
  let content = <p>TODO 7.4: show search results here</p>;

  return (
    <section>
      <h2>Search Hacker News</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="search-term">Search term</label>
        {/* TODO 7.3: make this a controlled input (value + onChange with setSearchTerm)
            TODO 7.5: attach the ref */}
        <input id="search-term" type="text" />
        {/* TODO 7.3: disable the button if the search term is empty */}
        <button>search</button>
      </form>
      <h3>Articles matching "{query}"</h3>
      {content}
    </section>
  );
}

export default Search;
