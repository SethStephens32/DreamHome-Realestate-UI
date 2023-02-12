import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Home.scss'

const Home = () => {
  return (
    <div className='main--container'>
        <Navigation />
        <div className="home--container">
            <div className="home--text">
            <h1 className='home--heading'>Find the place you'll love to call home with Dream Home.</h1>
            <p className='home--p'>Dream Home makes finding your perfect home easy. Our team helps you through the buying process and offers a wide range of properties to choose from. Start your journey to homeownership today.</p>
            </div>
            <div className='home--buttons'>
            <button className='home--forSale'>For Sale</button>
            <button className='home--forRent'>For Rent</button>
            <button className='home--vacation'>Vacation/Rental</button>
            </div>
            <div className='home--search'>
            <input type="text" placeholder='Search by city, zip code, or address' className='home--searchInput' />
            <button className='home--searchButton'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Home