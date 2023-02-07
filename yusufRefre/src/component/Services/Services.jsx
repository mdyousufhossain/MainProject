import React from 'react';
import { promotion } from '../../constants/info';
import { Avatar } from '../../constants/Avatar';

function Services() {
  return (
    <div className="container bg-primary">
      <div className="flex flex-col md:flex md:flex-row justify-center md:justify-around md:px-16">

        { promotion && promotion.map((p) => (
          <div className="py-4">
            <h3 className="consText text-center py-4 text-Title_light" key={p.id}>
              <span>
                <Avatar imgLink={p.icon} styleIMG="h-[55px] mx-auto" />
              </span>
              {p.titile}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Services;
