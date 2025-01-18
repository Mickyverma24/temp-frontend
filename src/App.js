import React, { useEffect, useState } from 'react';

const App = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch content from the public folder
    fetch('/content.txt')
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
      })
      .catch((err) => console.error('Error fetching text file:', err));
  }, []);

  return (
    <div>
      <h1>Crustdata Dataset API Detailed Examples</h1>
      <div>
        {content}
      </div>
    </div>
  );
};

export default App;
