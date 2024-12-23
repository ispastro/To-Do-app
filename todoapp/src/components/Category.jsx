import React from 'react'

const Category = () => {
  return (
    <div>
   
    <nav class="flex justify-around mb-4">
      <button data-category="all" class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">All</button>
      <button data-category="work" class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">Work</button>
      <button data-category="personal" class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">Personal</button>
      <button data-category="shopping" class="category-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">Shopping</button>
    </nav>
    </div>
  )
}

export default Category