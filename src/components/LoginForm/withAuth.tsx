import React from 'react'
import { redirect } from 'react-router-dom';


const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return  redirect('/login');
    }

    return <Component {...props} />;
  };
};

export default withAuth;