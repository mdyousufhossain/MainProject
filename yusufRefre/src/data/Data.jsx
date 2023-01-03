import React, { useEffect, useState } from 'react';
import supabase from '../client/client';

function AppData() {
  const [title, setTitle] = useState(null);
  // const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('yrProductDB').select('* ');

      if (error) console.log('error', error);
      else setTitle(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>hey there is
        {console.log(title)}
      </p>
      <ul>

        {title && title.map((t) => (
          <li key={t.id}>{t.title}
            <p> {t.brand}</p>
            <p> {t.category}</p>
            {t.description && t.description.map((p) => (
              <p key={p.id}> {p.Details}</p>
            )) }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppData;
