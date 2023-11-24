import React from 'react';

const TextSkills = () => {
  return (
    <svg className='ContainerTextSkills' viewBox="">
      {/* Symbol */}
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="50%" dy=".35em">Skills</text>
      </symbol>
      {/* Duplicate symbols */}
      <use className="text" xlinkHref="#s-text"></use>
      <use className="text" xlinkHref="#s-text"></use>
      <use className="text" xlinkHref="#s-text"></use>
      <use className="text" xlinkHref="#s-text"></use>
      <use className="text" xlinkHref="#s-text"></use>
    </svg>
  );
};

export default TextSkills;