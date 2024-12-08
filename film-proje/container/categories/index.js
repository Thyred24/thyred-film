import React from 'react'
import CategoryPage from '@/app/category/page'

const CategoryContainer = ({ data }) => {

  return (
    <div>
      {categories.map(category => (
        <CategoryPage
          key={category.id}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;
