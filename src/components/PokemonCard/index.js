import s from './style.module.css';
import cardBackSide from '../../assets/card-back-side.jpg';
import { useState } from 'react';

const PokemonCard =({name, img, id, type, values}) => {
    // console.log('####: props', props);
    const [isActive,setActive] = useState(false);

    // console.log('####: isActive', isActive);

    const handleClick = () => {
        setActive(true);
    };


    return (
        <>
            <div className={s.root} onClick= {handleClick } >
                <div className= { `${s.pokemonCard} ${isActive ? s.active : ''}` }>
                    <div className={s.cardFront}>
                        <div className={[s.wrap, s.front].join(' ')} >
                            <div className={[s.pokemon, s[type]].join(' ')} >
                                <div className={s.values}>
                                    <div className= {[s.count, s.top].join(' ')}> {values.top}</div>
                                    <div className= {[s.count, s.right].join(' ')}> {values.right}</div>
                                    <div className= {[s.count, s.bottom].join(' ')}> {values.bottom}</div>
                                    <div className= {[s.count, s.left].join(' ')}> {values.left}</div>
                                </div>
                                <div className= {s.imgContainer} >
                                    <img src={img} alt={name}  />
                                </div>
                                <div className={s.info} >
                                    <span className={s.number}>#{id}</span>
                                    <h3 className={s.name}>{name}</h3>
                                    <small className={s.type}>{type}</small>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        <div className={s.cardBack}>
                            <div className={[s.wrap, s.back].join(' ')}>
                                <img src={cardBackSide} alt="Card Backed" />
                            </div>
                        </div>
                </div>
            </div>

        </>
    )
}

export default PokemonCard;