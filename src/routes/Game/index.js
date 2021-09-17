import { useState } from 'react';
import s from './style.module.css';

import PokemonCard from '../../components/PokemonCard';
import Layout from "../../components/Layout";
import Pokemons from '../../data/Pokemons.json';

const GamePage = ({ onChangePage, active, handleCardClick }) => {

    const [pokemonArr, setArr] = useState(Pokemons);

    

    const handleClick =() => {
        onChangePage && onChangePage('app');
    }
    return (
        <div>
            <p>This is Game Page!!!</p>
            <>
            <Layout 
        id='cards'
        title='Cards'
        desc='here`s gonna cards'
        colorBg='#e2e2e2'
      >
          <div className='flex'>
            {
                Pokemons.map((item, index) => 
                  < 
                    PokemonCard 
                    key={item.id} type={item.type} img={item.img} name={item.name} values={item.values} item={item.item}
                  /> 
                )
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