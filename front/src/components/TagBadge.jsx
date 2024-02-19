import React from 'react';
import './css/TagBadge.css'; // Import the CSS file for styling

const TagBadge = ({ children }) => {
  return <span className="tagbadge">{children}</span>;
};

export default TagBadge;

