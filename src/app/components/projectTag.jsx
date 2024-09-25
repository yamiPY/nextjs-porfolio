import React from 'react';

const ProjectTag = ({ isSelected, onClick, name }) => {
  const TagStyle = isSelected ? 'bg-orange-500' : 'hover:border-white';
  
  return (
    <div>
      <button 
        className={`${TagStyle} border px-3 rounded-xl mb-4 hover:bg-orange-200`} 
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
