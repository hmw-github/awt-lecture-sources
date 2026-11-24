import { memo } from 'react';

/**
 * One row of the search result table.
 *
 * memo(): the component is only re-rendered if its props changed
 * (shallow comparison). This only works because
 *   - "story" objects come unchanged from the result state,
 *   - "saved" is a primitive boolean,
 *   - "onAdd" is wrapped in useCallback in App.
 * Open the console and add an article: only the affected row logs a render.
 */
function ArticleRow({ story, saved, onAdd }) {
  console.log('render ArticleRow:', story.title);

  const handleAdd = () => {
    onAdd({ title: story.title, url: story.url });
  };

  return (
    <tr>
      <td>
        <a href={story.url} target="_blank" rel="noreferrer">
          {story.title}
        </a>
      </td>
      <td>{story.author}</td>
      <td>{story.points}</td>
      <td>
        <button onClick={handleAdd} disabled={saved}>
          {saved ? '✓ saved' : '+ add'}
        </button>
      </td>
    </tr>
  );
}

export default memo(ArticleRow);
