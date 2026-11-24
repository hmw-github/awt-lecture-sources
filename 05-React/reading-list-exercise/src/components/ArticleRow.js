import { memo } from 'react';

/**
 * One row of the search result table.
 * Props: story (a hit from the Hacker News API), saved (boolean), onAdd (function)
 */
function ArticleRow({ story, saved, onAdd }) {
  console.log('render ArticleRow:', story.title);

  const handleAdd = () => {
    // TODO 7.6: call onAdd with an object containing title and url of the story
  };

  return (
    <tr>
      {/* TODO 7.6: render four cells:
            - the title as link to story.url (opens in a new tab)
            - story.author
            - story.points
            - a button that calls handleAdd; it shows "✓ saved" and is disabled
              if saved is true, otherwise it shows "+ add" */}
    </tr>
  );
}

// TODO 8.1: export the component wrapped in memo(), so that it only re-renders
//           when its props change. Watch the console: how many rows are rendered
//           when you add one article - before and after TODO 8.1 and 8.2?
export default ArticleRow;
