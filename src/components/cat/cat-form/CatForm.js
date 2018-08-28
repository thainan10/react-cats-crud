import React from 'react';
import PropTypes from 'prop-types';

import TextInput from 'components/common/TextInput';
import CheckBox from 'components/common/CheckBox';

class CatForm extends React.Component {

  constructor(props) {
    super(props);

    const { cat } = this.props;
    this.state = {
      cat,
      catHobbiesIds: this.getCatHobbiesIds(cat)
    };
  }

  componentDidMount() {
    this.checkHobbies(this.props.hobbies);
  }

  checkHobbies = uncheckedHobbies => {
    const hobbies = uncheckedHobbies.map(hobby => {
      hobby['checked'] =
        this.catHasHobby(hobby.id) ? true : false;
      return hobby;
    });
    this.setState({hobbies});
  };

  toggleHobbyCheck = hobbyId => {
    const hobbies =
      this.state.hobbies.map(checkedHobby => {
        if (checkedHobby.id === hobbyId)
          checkedHobby['checked'] = !checkedHobby['checked'];
        return checkedHobby;
      });
    this.setState({hobbies});
  };

  getCatHobbiesIds =
    cat => cat.hobbies.map(hobby => hobby.id);

  catHasHobby =
    hobbyId => this.state.catHobbiesIds.includes(hobbyId);

  removeCatHobby = hobbyId => {
    const index =
      this.state.catHobbiesIds.indexOf(hobbyId);

    const catHobbiesIds = this.state.catHobbiesIds;
    catHobbiesIds.splice(index);

    this.setState({catHobbiesIds});
  };

  addCatHobby = hobbyId => {
    const catHobbiesIds = this.state.catHobbiesIds;
    catHobbiesIds.push(hobbyId)
    this.setState({catHobbiesIds});
  }

  toggleCatHobby = hobbyId => {
    this.catHasHobby(hobbyId) ?
      this.removeCatHobby(hobbyId) :
      this.addCatHobby(hobbyId);
  };

  onHobbyChange = event => {
    const hobbyId = +event.target.value;
    this.toggleCatHobby(hobbyId);
    this.toggleHobbyCheck(hobbyId);
  };

  updateCatState = event => {
    const field = event.target.name;
    const cat = this.state.cat;
    cat[field] = event.target.value;
    return this.setState({cat});
  };

  onSave = event => {
    event.preventDefault();
    const cat = this.state.cat;
    cat['hobbies'] =
      this.state.catHobbiesIds.map(
        hobbyId => ({id: hobbyId}));
    this.props.onSave(cat);
  };

  renderCheckBoxes = () => {
    const { hobbies } = this.state;
    if (hobbies)
      return hobbies.map(hobby => {
        return (
          <CheckBox
            item={hobby}
            handleChange={this.onHobbyChange}
            key={hobby.id} />
        );
      });
  };

  render() {
    const {
      name,
      breed,
      weight,
      temperament
    } = this.state.cat;
    const checkBoxes = this.renderCheckBoxes();
    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value={name}
            onChange={this.updateCatState} />

          {checkBoxes}

          <TextInput
            name="breed"
            label="breed"
            value={breed}
            onChange={this.updateCatState} />

          <TextInput
            name="weight"
            label="weight"
            value={weight}
            onChange={this.updateCatState} />

          <TextInput
            name="temperament"
            label="temperament"
            value={temperament}
            onChange={this.updateCatState} />

          <input
            type="submit"
            disabled={this.props.saving}
            onClick={this.onSave} />
        </form>
      </div>
    )
  };
}

CatForm.propTypes = {
  cat: PropTypes.object.isRequired,
  hobbies: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default CatForm;
