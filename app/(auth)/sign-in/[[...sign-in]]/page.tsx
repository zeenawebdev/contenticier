import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <SignIn afterSignInUrl="/dashboard" />
    </div>
  );
};

export default SignInPage;
