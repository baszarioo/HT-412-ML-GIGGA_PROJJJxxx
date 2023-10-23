import { faHamburger, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';


const Nav = () => {
    return (
    <nav>
        <div>
            <Link href="/">
                <FontAwesomeIcon icon={faTicketAlt} className="icon" />
            </Link>
            <Link href="/TicketsPage/new">
                <FontAwesomeIcon icon={faHamburger} className="icon" />
            </Link>
        </div>
        <div>
            <p className="text-default-text">zabsonBladeeNation@gmail.eu.com</p>
        </div>
    </nav>
//   return (  <div>Nav</div> ) #default return
    );
}

export default Nav
// component we're gonna use in a project