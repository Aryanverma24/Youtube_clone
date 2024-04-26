import React, { useState } from 'react'
import './_categoryBar.scss'

const keywords = [
  "All",
  "React JS",
  "Angular JS",
  "Full Stack",
  "Punjabi Songs",
  "Bolywood Songs",
  "Redux",
  "Cricket",
  "Guitar",
  "Coding",
  "Naruto",
  "JavaScript",
  "Java",
  "AI",
  "DSA",
  "Apna College",
  "Flutter",
  "Gaming",
  "Technology"
]

const CategoryBar = () => {

  const [activeElement,setActiveElement] = useState('All');

  const handleClick = value => {
    setActiveElement(value);
  }
 
  return (
    <div className="categoriesbar">
      
      {
        keywords.map((value,i) => (
          <span onClick={() => handleClick(value)}
          key={i}
          className={activeElement===value ? "active":""}>{value}
       </span>
        ))
      }
      
    </div>
  )
}

export default CategoryBar