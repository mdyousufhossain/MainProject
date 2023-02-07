import React from 'react';

export function Avatar({ styleDiv, styleIMG, imgLink, altTXT }) {
  return (
    <div className={styleDiv}>
      <img src={imgLink} className={styleIMG} alt={altTXT} />
    </div>
  );
}

