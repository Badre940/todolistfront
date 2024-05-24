import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import accountService from '../_services/account.services';

const NavBar = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(accountService.isLogged());
  }, []);

  const logout = () => {
    accountService.logout();
    router.push('/'); // Rediriger vers /
    window.location.reload();
  };

  return (
    <header className='flex items-center justify-between p-5 text-white'>
      <nav>
        <ul className='flex gap-8 items-center'>
          <h1 className='text-h1custom text-3xl font-bold items-center'>Tailwind</h1>
          <li><Link href="/" className='custom-link text-customli'>Home</Link></li>
          <li><Link href="/about" className='custom-link text-customli'>About</Link></li>
          <li><Link href="/service" className='custom-link text-customli'>Service</Link></li>
          <li><Link href="/contact" className='custom-link text-customli'>Contact</Link></li>
        </ul>
      </nav>
      <div className='flex gap-4 items-center'>
        {!isLogged && (
          <>
            <Link href="/Login">
              <button className='rounded-md border-2 p-2 text-white'>LOGIN</button>
            </Link>
            <Link href="/Signup">
              <button className='text-white'>SIGNUP</button>
            </Link>
          </>
        )}
        {isLogged && (
          <button className='text-white' onClick={logout}>LOGOUT</button>
        )}
      </div>
    </header>
  );
};

export default NavBar;