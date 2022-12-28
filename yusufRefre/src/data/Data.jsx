import React, { useEffect , useState } from 'react';
import supabase from '../client/client';

function AppData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Use the Supabase client to make a request to fetch data from a table in your database
    supabase.from('YRDB').select().then((response) => {
      // Set the fetched data in the component's state
      setData(response.body);
    });
  }, []);

  return (
    <div>
      {data ? (
        // Render the data in your component
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default AppData;
