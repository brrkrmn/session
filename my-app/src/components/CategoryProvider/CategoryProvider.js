import React from 'react';

export const CategoryContext = React.createContext();

function CategoryProvider({ children }) {
  const [categories, setCategories] = React.useState([
    {id: Math.random(), name: 'school', color:'green'},
    {id: Math.random(), name: 'code', color:'grey'},
    {id: Math.random(), name: 'health', color:'white'},
  ]);

  function addCategory(name, color) {
    const nextCategory = {
      id: Math.random(),
      name: name,
      color: color,
    }
    const nextCategories = [...categories, nextCategory];
    setCategories(nextCategories);
    console.log(categories);
  }

  return (
    <CategoryContext.Provider value={{ categories, addCategory}}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider;
