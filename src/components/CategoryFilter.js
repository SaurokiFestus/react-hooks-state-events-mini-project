import React from "react";

function CategoryFilter({categories, handleFilter, CategoryFilter}) {
  const categoryBtn = categories.map((category) => {
    return (
      <button 
      className={CategoryFilter === category ? "selected" : ""}
      key={category}
      value={category}
      onClick={handleFilter}
      >
        {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;
