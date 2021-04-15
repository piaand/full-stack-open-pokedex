import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const PokemonHeader = () => (
  <Header as='h1' icon textAlign='center'>
    <Icon name='gamepad'/>
    <Header.Content>Pokemon</Header.Content>
    <Header sub>Gotta catch &apos;em all!</Header>
  </Header>
)

export default PokemonHeader