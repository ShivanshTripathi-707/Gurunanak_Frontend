import React from 'react'
import Service from '../components/Services/Service'
import Review from '../components/Reviews/Review'
import Rooms from '../components/Rooms/RoomsPrice'

const Home = () => {
  return (
    <>
    <div className="banner">
      <h1>Gurunanak Luxurious Boys <br /> PG / Hostel</h1>
      <p>Experience a clean, safe, and homely environment with all modern amenities — <br />fully air-conditioned rooms, purified RO drinking water, and every essential facility for your day-to-day needs.</p>
    </div>
    <Service/>
    <Rooms/>
    <Review/>
    </>
  )
}

export default Home