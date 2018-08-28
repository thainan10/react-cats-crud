import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as catActions from 'actions/catActions';

import HobbyList from 'components/hobby/hobby-list/HobbyList';
import CatForm from '../cat-form/CatForm';

class CatDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      cat: this.props.cat,
      hobbies: this.props.hobbies
    };
  }

  componentWillReceiveProps(nextProps) {
    const { cat, hobbies } = this.props;
    if (cat.id !== nextProps.cat.id)
      this.setState({cat: nextProps.cat});
    if (hobbies.length < nextProps.hobbies.length)
      this.setState({hobbies: nextProps.hobbies})
  }

  toggleEdit = () => this.setState({isEditing: !this.state.isEditing});

  saveCat = cat => {
    this.props.actions.updateCat(cat);
  };

  renderCatEditForm = () => {
    return (
      <div>
        <h1>Edit Cat</h1>
        <CatForm
          cat={this.state.cat}
          hobbies={this.state.hobbies}
          onSave={this.saveCat} />
      </div>
    );
  }

  renderCatDetails = cat => {
    return (
      <div className="container">
        <h1>{cat.name}</h1>
        <p>Breed: {cat.breed}</p>
        <p>Weight: {cat.weight}</p>
        <p>Temperament: {cat.temperament}</p>
        <HobbyList hobbies={cat.hobbies} />
        <button onClick={this.toggleEdit}>Edit</button>
      </div>
    );
  }

  render() {
    const { cat } = this.props;
    return (this.state.isEditing) ?
      this.renderCatEditForm() :
      this.renderCatDetails(cat);
  }
}

CatDetails.propTypes = {
  cat: PropTypes.object.isRequired,
  hobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (store, ownProps) => {
  let cat = {name: '', breed: '', weight: '', temperament: '', hobbies: []};
  const cats = store.catsState.items.content;
  let hobbies = [];
  if (cats.length) {
    const id = +ownProps.match.params.id;
    cat = Object.assign({},
      cats.find(cat => cat.id === id));

    hobbies = store.hobbiesState.items._embedded.hobbies;
  }
  return { cat, hobbies };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(catActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails);
