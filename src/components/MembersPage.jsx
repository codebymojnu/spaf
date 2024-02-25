// MembersPage.js
import React from 'react';
import MemberCard from './MemberCard';
import InvitationForm from './InvitationForm';

// Sample data for members
const members = [
  {
    name: 'Member 1',
    photo: 'url_to_member_photo_1',
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    name: 'Member 2',
    photo: 'url_to_member_photo_2',
    title: 'Title 2',
    description: 'Description 2',
  },
  // Add more members as needed
];

function MembersPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Members</h1>
      <InvitationForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
        {/* Display member cards */}
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
      {/* Display invitation form */}
     
    </div>
  );
}

export default MembersPage;