import React, { useEffect, useState } from 'react';
import supabase from '../client/client';

function Data() {
  const [fetchError, setFetchError] = useState(null);
  const [smooth, setSmooth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('YRDB')
        .select();

      if (error) {
        setFetchError('Error');
        setSmooth(null);
        console.log(error);
      }
      if (data) {
        setSmooth(data.map((n) => console.log(n.title)));
        setFetchError(null);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {fetchError && (
      <p>
        {fetchError}
      </p>
      ) }

      <div>
        {console.log(smooth.title)}
        {smooth && smooth.map((smoot) => (
          <p>{smoot.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Data;
