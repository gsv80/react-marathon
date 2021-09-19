import { useState } from 'react';
import { useHistory } from 'react-router';
import s from './style.module.css';

import PokemonCard from '../../components/PokemonCard';
import Layout from "../../components/Layout";
import Pokemons from '../../data/Pokemons.json';

const GamePage = () => {
    
    const [pokemons, setPokemons] = useState(Pokemons.slice(0,5));
    

    const  handleChangeActive = (id) => {
        setPokemons(prev => 
            prev.map(item => 
                item.id === id ? 
                {...item, active: !item.active} : 
                item)
            );
    };

    

    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    return (
        <div>
            
            <>
            <Layout 
                id='cards'
                title='Cards'
                desc='here`s gonna cards'
                colorBg='#e2e2e2'
                
            >
            <div className={s.flex}>
                {
                    pokemons.map(({name, img, id, type, values, active}) => (
                    < 
                        PokemonCard 
                            key={id} 
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