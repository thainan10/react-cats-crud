import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CatDetails extends React.Component {

  render() {
    const { cat } = this.props;
    return (
      <div className="container">
        <h1>{cat.name}</h1>
        <p>Breed: {cat.breed}</p>
        <p>Weight: {cat.weight}</p>
        <p>Temperament: {cat.temperament}</p>
      </div>
    );
  }
}

CatDetails.propTypes = {
  cat: PropTypes.object.isRequired
};

const mapStateToProps = store => {
};

export default connect(mapStateToProps)(CatDetails);
