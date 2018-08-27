import React from 'react';
import PropTypes from 'prop-types';

import TextInput from 'components/common/TextInput';
import CheckBox from 'components/common/CheckBox';

class CatForm extends React.Component {

  renderCheckBoxes = () => {
    const { hobbies, onHobbyChange } = this.props;
    return hobbies.map(hobby => {
      return (
        <CheckBox
          item={hobby}
          handleChange={onHobbyChange}
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
    } = this.props.cat;
    const checkBoxes = this.renderCheckBoxes();
    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value={name}
            onChange={this.props.onChange} />

          {checkBoxes}

          <TextInput
            name="breed"
            label="breed"
            value={breed}
            onChange={this.props.onChange} />

          <TextInput
            name="weight"
            label="weight"
            value={weight}
            onChange={this.props.onChange} />

          <TextInput
            name="temperament"
            label="temperament"
            value={temperament}
            onChange={this.props.onChange} />

          <input
            type="submit"
            disabled={this.props.saving}
            onClick={this.props.onSave} />
        </form>
      </div>
    )
  };
}

CatForm.propTypes = {
  cat: PropTypes.object.isRequired,
  hobbies: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onHobbyChange: PropTypes.func.isRequired
};

export default CatForm;
