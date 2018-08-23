import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HobbyList from 'components/hobby/hobby-list/HobbyList';

class CatDetails extends React.Component {

  render() {
    const { cat } = this.props;
    return (
      <div className="container">
        <h1>{cat.name}</h1>
        <p>Breed: {cat.breed}</p>
        <p>Weight: {cat.weight}</p>
        <p>Temperament: {cat.temperament}</p>
        <HobbyList hobbies={cat.hobbies} />
      </div>
    );
  }
}

CatDetails.propTypes = {
  cat: PropTypes.object.isRequired
};

const mapStateToProps = (store, ownProps) => {
  let cat = {name: '', breed: '', weight: '', temperament: '', hobbies: []};
  const cats = store.catsState.items.content;
  if (cats.length) {
    const id = +ownProps.match.params.id;
    cat = Object.assign({},
      cats.find(cat => cat.id === id));
  }
  return { cat };
}

export default connect(mapStateToProps)(CatDetails);
