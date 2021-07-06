import React from "react";

function CategoryFilter({categories, handleFilteredCategory, selectedCategory}) {
  // console.log('CategoryFilter Component', selectCategory)

  let categoryButton = categories.map((category) => {

    let className = (category === selectedCategory ? 'selected' : null)

    return (
      <button key={category} onClick={handleFilteredCategory} className={className}>
        {category}
      </button>
    )
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
