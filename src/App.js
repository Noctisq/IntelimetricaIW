import Restaurant from './components/Restaurant';
import data from './utils/data';
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const getRestaurants = () => {
    try {
      setRestaurants(data);

    } catch (error) {
      console.log(error)
    }
  };

  const filterByRating = () => {

    let ratingSorted = [...restaurants];

    ratingSorted.sort((a, b) => {

      if (a.rating < b.rating)
        return -1;
      if (a.rating > b.rating)
        return 1;
      return 0;
    });
    setRestaurants(ratingSorted);


    console.log(restaurants);

  };

  const filterByName = () => {

    let nameSorted = [...restaurants];

    nameSorted.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      return 0;
    });
    setRestaurants(nameSorted);


    console.log(restaurants);

  };


  useEffect(() => {

    getRestaurants();

  }, []);

  if (restaurants.length < 1) {
    return (
      <h2 className='section-title'>
        no restaurants
      </h2>
    )
  }
  if (loading) {
    return <Loading />
  }
  return (
    <section className='section'>
      <h2 className='section-title'>restaurants <button onClick={() => {
        filterByRating()
      }} className='btn-primary'>By Rating</button>
        <button onClick={() =>{
          filterByName()
        }}className='btn-primary'>Alphabetically</button>
      </h2>


      <div className='restaurants-center'>

        {restaurants.map((item) => {
          return <Restaurant key={item.id}  {...item} />
        })}
      </div>
    </section>
  )
}

export default App;
