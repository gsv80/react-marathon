import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import s from './style.module.css';

import database from '../../services/firebase';
import { ref , set , child } from 'firebase/database';
import PokemonCard from '../../components/PokemonCard';
import Layout from "../../components/Layout";
import defPokemons from "../../data/pokemons-default-db.json"

const GamePage = () => {
    
    const [pokemons, setPokemons] = useState({});
    
    const getPokemons =() =>{
        database.ref('pokemons').once ('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    }
    useEffect(() => {
        getPokemons();
        
    }, [pokemons]);

    const  handleChangeActive = (id, isActive) => {
        setPokemons(prev => {
            
            return Object.entries(prev).reduce((acc,item) =>{
                
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active=!pokemon.active;
                    console.log(typeof(pokemon));
                };
                
                
                acc[item[0]] =pokemon;
                
                database
                    .ref('pokemons/'+item[0])
                    .set(pokemon);
                
                return acc;
            },{});   
        });
    }



    const cardsToAdd=() => {
        
        
        let keys=Object.keys(defPokemons.pokemons)   
        console.log(keys)
        let randNum= (Math.floor(Math.random()*keys.length)+1);
        let newOne = defPokemons.pokemons[keys[randNum]]
        const newKey = database.ref().child('pokemons').push().key;
        set(ref(database, 'pokemons/' + newKey), newOne);
  

        };
       
    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    return (
        <div >
            
            <>
            <Layout 
                id='cards'
                title='Cards'
                desc='here`s gonna cards'
                colorBg='#e2e2e2'
                
            >
            <div className={s.flex}>

                <button onClick = {cardsToAdd}>
                   Push to Add Card
                </button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, { name, img, id, type, values, active}]) => (
                    < 
                        PokemonCard 
                            key={key} 
                            name={name}
                            type={type} 
                            img={img} 
                            id={id} 
                            values={values} 
                            isActive={active}
                            onClickedCard={ handleChangeActive }
                    /> 
                    ))
                }
            </div>
      </Layout>
            </>
            <button onClick = {handleClick}>
                Back to Home page
            </button>

        </div>
    );
}

export default GamePage;