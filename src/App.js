import React, { useEffect, useState } from 'react';

const App = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch content from the public folder
    fetch('/content.txt')
      .then((response) => response.text())
      .then((data) => setContent(data))
      .catch((err) => console.error('Error fetching text file:', err));
  }, []);

  return (
    <div>
      <h1>Crustdata Discovery And Enrichment API</h1>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default App;
