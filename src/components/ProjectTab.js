// ProjectTabs.js
import React, { useState } from 'react';
import ProjectCards from '../components/ProjectCards';

const categories = ['Web Development', 'Software Development', 'Virtual Reality', '3D Modeling', 'Game Development'];

function ProjectTabs() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="project-tabs">
      <div className="tabs">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <ProjectCards category={activeCategory} />
    </div>
  );
}

export default ProjectTabs;
