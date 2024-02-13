import './Deal.css';

const Deal = () => {
  return (
    <section id='deal'>
      <div className="deal-container container">
        <div className="deal-left">
          <img src="../../../public/banner.png" alt="" />
        </div>
        <div className="deal-right">
          <h4>Sale on Summer Collection 2024</h4>
          <h1>Uo to 59% Off</h1>
          <button className='btn'>Shop now</button>
        </div>
      </div>
    </section>
  );
};

export default Deal;
