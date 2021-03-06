import React from 'react';
import PropTypes from 'prop-types';

class CatList extends React.Component {

  showCatDetails = e =>
    this.props.showCatDetails(e.currentTarget.dataset.id);

  render() {
    const { cats } = this.props;

    return (
      <ul className="list-group">
        {cats.content.map(cat =>
          <li className="list-item" key={cat.id} data-id={cat.id} onClick={this.showCatDetails}>
            {cat.name}
          </li>
        )}
      </ul>
    );
  }
}

CatList.propTypes = {
  cats: PropTypes.object.isRequired
};

export default CatList;
