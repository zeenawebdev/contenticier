import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <SignUp afterSignUpUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
