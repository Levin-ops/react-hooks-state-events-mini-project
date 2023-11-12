import React from "react";

function CategoryFilter({categories, selectedCategory, onCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* <button
        key= "all"
        className= {selectedCategory === 'all' ? 'selected' : ''}
        onClick={() => onCategoryChange('all')}>
          All
        </button> */}
      {categories.map(category => (
        <button
          key={category}
          className= {selectedCategory ===category ? 'selected':""}
          onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
