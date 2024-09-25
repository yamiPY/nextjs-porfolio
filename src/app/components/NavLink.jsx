import React from 'react';
import Link from 'next/link';

function NavLink({ href, title }) {
  return (
    <Link href={href} className='block py-2 pl-2 pr-3 text-[#dfdddd] sm:text-xl rounded md:p-0 hover:text-white'>
      {title}
    </Link>
  );
}

export default NavLink;
