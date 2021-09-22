import { useState, useEffect, useContext  } from 'react';
import { useHistory } from 'react-router';

import PokemonCard from '../../../../components/PokemonCard';


import s from './style.module.css';

import { FireBaseContext } from '../../../../context/firebaseContext'
import { PokemonContext } from '../../../../context/pokemonContext';

const StartPage = () => {
    const firebase = useContext(FireBaseContext);
    const pokemonsContext= useContext(PokemonContext);
    const history=useHistory();
    const [pokemons, setPokemons] = useState({});
    
    useEffect(() => {
        firebase.getPokemonSocket((pokemons) =>{
            setPokemons(pokemons);
        })
        return () => firebase.offPokemonSocket();
    }, []);

    const  handleChangeSelected = (key) => {
       
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);

        console.log('####:pokemonContext', Object.keys(pokemons));

        setPokemons(prev => ({
            ...prev,
            [key]:{
                ...prev[key],
                selected: !prev[key].selected,
            }
        }))
    }

    const handlerStartGameClick = () => {
        history.push('/game/board');
    }


    return (
                 
            <>
                <div className={s.buttonWrap}>
                    <button  
                    onClick={handlerStartGameClick}
                    disabled = {Object.keys(pokemonsContext).length <5}
                    >
                        Start Game
                    </button>
                </div>

                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, { name, img, id, type, values, selected}]) => (
                        < 
                            PokemonCard 
                                className={s.card}
                                key={key} 
                                name={name}
                                type={type} 
                                img={img} 
                                id={id} 
                                values={values} 
                                isActive={true}
                                isSelected={selected}
                                onClickCard={()=> {

                                    if (Object.keys(pokemonsContext.pokemons).length <5 || selected){
                                        handleChangeSelected(key) ;
                                    }
                                }}
                        /> 
                        ))
                    }
                </div>

            
            </>

        
    );
}

export default StartPage;