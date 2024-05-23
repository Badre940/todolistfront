import React from 'react';
import Link from 'next/link';
import  accountService  from '../_services/account.services';

const NavBar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    accountService.logout();
    window.location.href = '/login'; // Rediriger directement vers /login
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
        {!accountService.isLogged() && (
          <>
            <Link href="/Login">
              <button className='rounded-md border-2 p-2 text-white'>LOGIN</button>
            </Link>
            <Link href="/Signup">
              <button className='text-white'>SIGNUP</button>
            </Link>
          </>
        )}
        {accountService.isLogged() && (
          <>
            <Link href="/">
            <button className='text-white' onClick={logout}>LOGOUT</button></Link>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
