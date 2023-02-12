import React from 'react';
import { Avatar } from '../../Helper/Avatar';
import rat from '../../assets/repireguy.webp';

function ServicesGuy() {
  return (
    <Avatar className="hidden md:block" imgLink={rat} altTXT="a guy with refrigerant tool for yousuf refrigerant work" styleIMG="h-[256px] w-[256px] hidden md:block" styleDiv="py-16" />
  );
}

export default ServicesGuy;
