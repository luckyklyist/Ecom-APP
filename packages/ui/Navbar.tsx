import * as React from 'react';
import Link from 'next/link';
// import "./styles/index.css"

export const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">ECOM APP</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/products">Proudcts</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/profile">Carts</Link></li>
            <li><Link href="/signup">SignUp</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
