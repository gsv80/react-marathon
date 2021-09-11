import s from './style.module.css';

const PokemonCard =(props) => {
    return (
        <>
            <div className={s.root}>
                <div className= {s.pokemonCard}>
                    <div className={s.cardFront}>
                        <div className={s.wrap, s.front} >
                            <div className={s.pokemon} /*<-- Type Pokemon -->*/ >
                                <div className={s.values}>
                                    <div className= {s.count, s.top}></div>
                                    <div className= {s.count, s.right}></div>
                                    <div className= {s.count, s.bottom}></div>
                                    <div className= {s.count, s.left}></div>
                                </div>
                                <div className= {s.imgContainer} >
                                    <img src="" alt=""  />
                                </div>
                                <div className={s.info} >
                                    <span className={s.number}></span>
                                    <h3 className={s.name}></h3>
                                    <small className={s.type}></small>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        <div className={s.cardBack}>
                            <div className={s.wrap, s.back}>
                                <img src="" alt="Card Backed" />
                            </div>
                        </div>
                </div>
            </div>

        </>
    )
}

export default PokemonCard;