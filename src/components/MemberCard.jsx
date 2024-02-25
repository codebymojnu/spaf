// MemberCard.js
import React from 'react';

function MemberCard({ member }) {
  const { name, photo, title, description } = member;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={photo} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default MemberCard;
