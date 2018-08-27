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
    const { cat, hobbies, checkedHobbies } = this.props;
    if (cat.id !== nextProps.cat.id)
      this.setState({cat: nextProps.cat});
    if (hobbies.length < nextProps.hobbies.length)
      this.setState({hobbies: nextProps.hobbies})
    if (checkedHobbies.length < nextProps.checkedHobbies.length)
      this.setState({checkedHobbies: nextProps.checkedHobbies})
  }

  toggleEdit = () => this.setState({isEditing: !this.state.isEditing});

  updateCatState = (event) => {
    const field = event.target.name;
    const cat = this.state.cat;
    cat[field] = event.target.value;
    return this.setState({ cat });
  };

  updateCatHobbies = (event) => {
    const cat = this.state.cat;
    const hobbyId = +event.target.value;
    const hobby = this.state.checkedHobbies.filter(hobby => hobby.id === hobbyId).shift();
    const checked = !hobby.checked;
    hobby['checked'] = !hobby.checked;
    if (checked) {
      cat.hobbies.push(hobby);
    } else {
      cat.hobbies = cat.hobbies.filter(catHobby => catHobby.id !== hobby.id);
    }
    this.setState({cat});
  };

  saveCat = (event) => {
    event.preventDefault();
    console.log(this.state.cat)
    // this.props.actions.updateCat(this.state.cat);
  };

  renderCatEditForm = cat => {
    return (
      <div>
        <h1>Edit Cat</h1>
        <CatForm
          cat={this.state.cat}
          hobbies={this.state.checkedHobbies}
          onSave={this.saveCat}
          onChange={this.updateCatState}
          onHobbyChange={this.updateCatHobbies} />
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
      this.renderCatEditForm(cat) :
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
  let checkedHobbies = [];
  if (cats.length) {
    const id = +ownProps.match.params.id;
    cat = Object.assign({},
      cats.find(cat => cat.id === id));

    hobbies = store.hobbiesState.items._embedded.hobbies;

    const catHobbiesIds = cat.hobbies.map(hobby => hobby.id);
    checkedHobbies = hobbies.map(hobby => {
      hobby['checked'] = (catHobbiesIds.includes(hobby.id)) ? true : false;
      return hobby;
    })
  }
  return { cat, hobbies, checkedHobbies };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(catActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails);
