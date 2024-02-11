import CategoriesCard from '../../components/CategoriesCard';
import { categoryData } from '../../constants';
import './Categories.css';

const Categories = () => {
  return (
    <section id='categories'>
      <div className="title">
        <h2>Categories</h2>
      </div>
      <div className="container categories-container">
        {categoryData.map((category) => (
          <CategoriesCard key={category.imgURL} imgURL={category.imgURL} title={category.title} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
