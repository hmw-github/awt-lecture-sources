import { useEffect, useRef, useState } from "react";
import './ArticleSearch.css';

const URL = 'https://hn.algolia.com/api/v1/search?query=';

const ArticleSearch = () => {
  // used to receive result from server call
  const [queryResult, setQueryResult] = useState([]);
  // receives user input for search term
  const [searchTerm, setSearchTerm] = useState('React');
  // indicate whether we are currently waiting for server reply
  const [isLoading, setIsLoading] = useState(false);
  // reference for text input field, used to set focus after data from server arrived
  const inputRef = useRef(null);

  /**
   * Asynchronous function that fetches article descriptions for given search term.
   */
  async function fetchData() {
    try {
      console.log('fetchData: Fetching article descriptions');
      setIsLoading(true);
      const response = await fetch(`${URL}${searchTerm}`);
      const json = await response.json(); // convert to JSON 
      setIsLoading(false);
      setQueryResult(json.hits); // populate queryResult with data from server
    } catch (err) {
      console.log(err);
      alert(`Error fetching data from server: ${err}`);
    }
  }

  useEffect(() => {  // needed to avoid endless loop
    fetchData();
  }, []); // despite the warning: dependency array is necessary!

  let storyRows = [];

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchButton = () => {
    fetchData();
    inputRef.current.focus();
  };

  let articleSearchTable = <p>loading data ...</p>; // display this if we are loading results
  if (!isLoading) {
    // not loading: fill table with article descriptions from query result
    storyRows = queryResult.map((story) => {
      return (
        <tr key={story.objectID}>
          <td>{story.author}</td>
          <td>{story.title}</td>
          <td>
            <a href={story.url} target="_new">
              {story.url}
            </a>
          </td>
        </tr>
      );
    });
    articleSearchTable = (
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>{storyRows}</tbody>
      </table>
    );
  }

  return (
    <>
      <div>
        <h2>Article Search</h2>
        <label htmlFor="search-term">Search term</label>
        <input ref={inputRef} type="text" id="search-term" value={searchTerm}
          onChange={handleSearchTermChange} />
        <button type="button" onClick={handleSearchButton}
          disabled={!searchTerm.trim().length}>search</button>
      </div>
      <h3>Articles matching your search term:</h3>
      {articleSearchTable}
    </>
  )
}

export default ArticleSearch;