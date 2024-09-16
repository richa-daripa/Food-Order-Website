import React, { useState } from 'react';

import Header from '../../Components/Header/Header';
import Explore from '../../Components/Explore/Explore';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import Appdownload from '../../Components/AppDownload/Appdownload';


const Home = () => {

  const [category, setCategory] = useState("All");
  
  return (
    < >
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Appdownload />
    </>
  );
}

export default Home;