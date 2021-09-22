import { useRouteMatch, Switch, Route } from "react-router-dom";

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from '../../context/pokemonContext';
import { useState } from "react/cjs/react.development";

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    
    const match = useRouteMatch();

    const handleSelectedPokemons =(key, pokemon) =>{
        
        setSelectedPokemons(prev => {
            if (prev[key]) {
               const copyState ={...prev};
               delete copyState[key];

               return copyState;
            }
            return {
                ...prev,
                [key] : pokemon,
            }
        })
    }
    
    return (
        <PokemonContext.Provider value={{
            pokemons : selectedPokemons,
            onSelectedPokemons:handleSelectedPokemons
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;