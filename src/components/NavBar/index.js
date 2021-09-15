import { useState } from 'react';
import cn from 'classnames';
import s from './style.module.css'

function NavBar( {onOpenBurger} ) {

    const [isActive, setActive]=useState(false);

    const burgerOpen = () => {
        console.log('####: open burger menu');
        setActive(!isActive);
        onOpenBurger && onOpenBurger ();
    }

    return (
        <nav className={cn(s.root)}>
            <div className={cn(s.navWrapper)}>
                <p className={cn(s.brand)}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active] : isActive})} onClick = {burgerOpen}>
                <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;
