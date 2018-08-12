import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatList from './cat-list/CatList';

class CatsPage extends React.Component {
  render() {
    const { cats } = this.props;

    return (
      <div className="cats-container">
        <h1>Cats</h1>
        <CatList cats={cats} />
      </div>
    );
  }
}

CatsPage.propTypes = {
  cats: PropTypes.array.isRequired
};

const mapStateToProps = store => ({
  cats: store.catsState.items
});

export default connect(mapStateToProps)(CatsPage);
