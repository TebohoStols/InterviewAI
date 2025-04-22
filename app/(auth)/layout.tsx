import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const AuthLayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  //If the user is already authenticated, redirect user to the home page
  if(isUserAuthenticated) redirect('/');


  return (
    <div className='auth-layout'>
      {children}


    </div>
  )
}

export default AuthLayout
