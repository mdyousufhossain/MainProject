import React from 'react';
import { Avatar } from '../../constants/Avatar';
import rat from '../../assets/repireguy.png';

function ServicesGuy() {
  return (
    <Avatar className="hidden md:block" imgLink={rat} styleIMG="h-[256px] hidden md:block" styleDiv="py-16" />
  );
}

export default ServicesGuy;
