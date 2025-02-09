
import React, { useEffect, useState } from 'react';

const Docs = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch('https://www.markdownguide.org/api/v1/')
      .then((response) => response.json())
      .then((data) => setDocs(data));
  }, []);

  return (
    <div>
      <h2>Markdown Docs</h2>
      <ul>
        {docs.map((doc) => (
          <li key={doc.id}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              {doc.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Docs;
