import {useEffect, useState} from 'react';
import './Cards.css';
import Card from './Card';

const Cards = () => {
    const[pokemon, setPokemon] = useState([]);
    const[offset, setOffset] = useState(20);
    
    const getPokemon = async (url) => {
        try{
            let res = await fetch(url),
            json = await res.json();
            json.results.forEach(async el => {
                let res = await fetch(el.url),
                json = await res.json();
                let poke = {
                    id: json.id,
                    name: json.name,
                    sprite: json.sprites.front_default,
                    height: json.height,
                    weight: json.weight,
                    types: json.types,
                    stats: json.stats
                    
                }
                setPokemon(pokemon => [...pokemon, poke]);    
            });
        }
        catch(e){
            console.error(e);
        }
    };

    const morepokemon = () => {
        setOffset(offset + 20);
        getPokemon(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    }

    useEffect(() => {
        getPokemon('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');           
    }, []);

    return (
        <>
        <div className="container">
            {
                pokemon.sort((a, b) => a.id > b.id ? 1 : -1).map((el) => 
                <Card key={el.id} id={el.id} name={el.name} sprite={el.sprite} types={el.types} height={el.height} weight={el.weight} stats={el.stats}/>
                )

            }
        </div>
        <div className='container-button' onClick={morepokemon}>
            <button className='button'>Cargar mas</button>
        </div>
        </>
    )
}

export default Cards;