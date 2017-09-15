import React from 'react';
import { values } from 'lodash';
import ItemDetailContainer from '../items/item_detail_container';
import Route from 'react-redux-dom';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.id !== newProps.match.params.id) {
      this.props.requestPokemon(newProps.match.params.id);
    }
  }

  render() {
    console.log(this.props.poke.items);
    let items = "";
    if (this.props.poke.items !== undefined) {
      items = this.props.poke.items.map((item, idx) => {
        return (
          {item.name}
        );
      });
    }

    return(
      <div>
        <figure>
          <img src={this.props.poke.image_url} />
        </figure>
        <ul>
          <li><h3>{this.props.poke.name}</h3></li>
          <li>Type: {this.props.poke.poke_type}</li>
          <li>Attack: {this.props.poke.attack}</li>
          <li>Defense: {this.props.poke.defense}</li>
          <li>Moves: {this.props.poke.moves}</li>
        </ul>
        <section>
          <ul>
            { items }
          </ul>
        </section>
      </div>
    );
  }
}




export default PokemonDetail;
