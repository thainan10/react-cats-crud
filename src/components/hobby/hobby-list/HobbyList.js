import React from 'react';
import PropTypes from 'prop-types';

const HobbyList = ({hobbies}) => {
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map(hobby =>
          <li key={hobby.id}>{hobby.name}</li>
        )}
      </ul>
    </div>
  );
};

HobbyList.propTypes = {
  hobbies: PropTypes.array.isRequired
};

export default HobbyList;
