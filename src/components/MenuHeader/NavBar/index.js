import { useState } from 'react';
import cn from 'classnames';
import s from './style.module.css'

function NavBar( {onOpenBurger, isActive} ) {

    

    const burgerOpen = () => {
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
