import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem('is_login'));
  const email = localStorage.getItem('email');
  const full_name = localStorage.getItem('full_name');
  console.log('is_login', is_login);

  if (is_login === null) {
    return <Redirect to={{ pathname: '/signin' }} />;
  } else {
    return (
      <div>
        <h1>Profile</h1>
        <h2>
          <code>Email:</code>
          {email}
        </h2>
        <h2>
          <code>Full name:</code>
          {full_name}
        </h2>
      </div>
    );
  }
};

export default Profile;
