"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from "./";

const SearchBar = () => {
    
    const [manufacturer, setManuFacturer] = useState('');

    const handleSearch = () => {}



  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
      <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
</div>
</form>
  )
}

export default SearchBar
