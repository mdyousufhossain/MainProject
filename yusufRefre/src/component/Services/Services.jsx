import React from 'react';
import { promotion } from '../../constants/info';
import { Avatar, Top, Time, Satisfaction } from '../../constants/Avatar';

export function ServicesMini() {
  return (
    <div className="flex flex-col md:flex md:flex-row justify-center md:justify-around md:px-16">

      {/* { promotion && promotion.map((p) => (
        <div className="mx-2 rounded-md " key={p.id}>
          <h3 className="consText text-center py-2 text-black-900 dark:text-Title_Dark">
            <span>
              <Avatar imgLink={p.icon} styleIMG="h-[55px] mx-auto" />
            </span>
            {p.titile}
          </h3>

        </div>
      ))} */}
      <div className="mx-2">
        <h3 className="consText text-center py-2 text-black-900 dark:text-Title_Dark">
          <span>
            <Time style="fill-secondary dark:fill-primary mx-auto" />
          </span>
          Long term Service
        </h3>
      </div>
      <div className="mx-2">
        <h3 className="consText text-center py-2 text-black-900 dark:text-Title_Dark">
          <span>
            <Top style="fill-secondary dark:fill-primary mx-auto mb-2" />
          </span>
          Top Quality
        </h3>
      </div>
      <div className="mx-2 flex flex-col items-center  justify-center ">
        <h3 className="consText text-center py-2 text-black-900 dark:text-Title_Dark">
          <span>
            <Satisfaction style="fill-secondary dark:fill-primary mx-auto py-1 my-3" />
          </span>
         Satisfaction Guerantee
        </h3>
      </div>

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
