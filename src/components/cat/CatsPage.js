import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CatList from './cat-list/CatList';
import CatDetails from 'components/cat/cat-details/CatDetails';

class CatsPage extends React.Component {

  showCatDetails = id => {
    const { history, match } = this.props;
    history.push(`${match.url}/${id}`);
  }

  render() {
    const { cats, match } = this.props;

    return (
      <div className="container">
        <div className="cats-container">
          <h1>Cats</h1>
          <CatList cats={cats} showCatDetails={this.showCatDetails}/>
        </div>
        <div className="cat-details-container">
          <Route path={`${match.url}/:id`} component={CatDetails} />
        </div>
      </div>
    );
  }
}

CatsPage.propTypes = {
  cats: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  cats: store.catsState.items
});

export default connect(mapStateToProps)(CatsPage);
