// src/components/FetchData.js

import React, { useEffect,useState } from 'react';

const logoutUser = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default logoutUser;
