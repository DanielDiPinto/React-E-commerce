import { jacketsData } from '../../constants';
import './Hero.css';
import CountUp from 'react-countup';
import jacket1 from '../../../public/jacket1.png'
import JacketsCard from '../../components/jacketsCard'; // Assuming 'jacketsCard' is a named export and component name starts with uppercase
import { useState } from 'react';

const Hero = () => {
  const [jacketImg, setjacketImg] = useState(jacket1)
  return (
    <section id='hero'>
      <div className="hero-container container">
        <div className="hero-left">
          <h1>Finding Your Perfect Item</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, unde quas deleniti ad mollitia iusto?</p>
          <button className='btn'>Shop now</button>
          <div className="hero-stats">
            <div className="stat-box">
              <span>
                <CountUp start={1400} end={1500} duration={3}/>
                <p>+</p>
              </span>
              <span>Brands</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={350} end={500} duration={3}/>
                <p>+</p>
              </span>
              <span>Outlets</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={45600} end={9000} duration={3}/>
                <p>+</p>
              </span>
              <span>Customers</span>
            </div>
          </div>
        </div>
        <div className='hero-right'>
          <img src={jacketImg} alt="" />
          <div className="hero-right-container">
            {jacketsData.map((jacket, i) => (
              <div key={i}>
                <JacketsCard 
                  imgURL={jacket}
                  changeJacketImage={(jacket) => setjacketImg(jacket)}
                  jacketImg={jacketImg}
                />
              </div>
            ))}
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Hero;
