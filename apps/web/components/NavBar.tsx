import Link from "next/link";
import { getTokenCookie } from "../utils/cookieUtils";

const NavBarLayout: React.FC<{ totalCart: Number }> = ({ totalCart }) => {
  const token = getTokenCookie();
  let autheticated = false;
  if (token) {
    autheticated = true;
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="font-bold text-xl italic p-3">
            KLYISTIFY
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/products">Proudcts</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/cart" className="relative group">
                <span className="relative inline-block">
                  <span
                    className="mr-2 text-indigo-500 group-hover:text-indigo-700 text-base"
                    role="img"
                    aria-label="Cart"
                  >
                    🛒
                  </span>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {totalCart}
                  </span>
                </span>
                Cart
              </Link>
            </li>
            {autheticated ? (
              <li>
                <Link href="/logout">Logout</Link>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarLayout;
