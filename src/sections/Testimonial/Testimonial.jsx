import './Testimonial.css'
import { RiDoubleQuotesL } from 'react-icons/ri'

function Testimonial() {
  return (
    <section id='testimonial'>
        <div className="title">
          <h2>Testimonial</h2>
        </div>
      <div className="testimonial-container container">
        <div className="testimonial-card">
          <img src="../../../public/cstmr1.jpg" alt="" />
          <h4>Angela Rossi</h4>
          <h5>CEO & Founder </h5>
          <div className="quotes">
            <RiDoubleQuotesL/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio, iusto voluptates quia quas cumque quibusdam nobis ullam!</p>
        </div>
       
        <div className="testimonial-card">
          <img src="../../../public/cstmr2.jpg" alt="" />
          <h4>Angela Rossi</h4>
          <h5>CEO & Founder </h5>
          <div className="quotes">
            <RiDoubleQuotesL/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quo libero modi beatae maxime adipisci quisquam ratione itaque quia.</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial