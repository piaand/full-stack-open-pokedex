import React from 'react'
import { Link } from 'react-router-dom'
import PokemonHeader from './PokemonHeader'

const PokemonList = ({ pokemonList }) => {
  return (
    <>
      <PokemonHeader />
      <div className="list-container">
        {pokemonList.map(({ id, name }) => (
          <Link key={id} to={`/pokemon/${name}`} className="list-item" style={{ backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})` }}>
            <div
              className="list-item-name"
            >
              {name}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default PokemonList
