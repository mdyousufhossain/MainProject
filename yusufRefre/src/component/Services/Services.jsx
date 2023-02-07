import React from 'react';
import { promotion } from '../../constants/info';
import { Avatar } from '../../constants/Avatar';

export function ServicesMini() {
  return (
    <div className="flex flex-col md:flex md:flex-row justify-center md:justify-around md:px-16">

      { promotion && promotion.map((p) => (
        <div className="mx-2 rounded-md " key={p.id}>
          <h3 className="consText text-center py-2 text-black-900">
            <span>
              <Avatar imgLink={p.icon} styleIMG="h-[55px] mx-auto" />
            </span>
            {p.titile}
          </h3>

        </div>
      ))}

    </div>
  );
}

function Services() {
  return (
    <div className=" bg-primary">
      <div className="container" />
    </div>
  );
}

export default Services;
