import React from 'react';
import { shape } from 'prop-types';

import houseImage from './house';

const Listing = ({ listing }) => (
  <div className="listing shadow">
    <img
      src={houseImage}
      className="listing-image"
    />
    <div className="listing-description">
      <div>{listing.address}</div>
      <div>{`$${listing.price}`}</div>
      <div>{listing.description}</div>
    </div>
  </div>
);

export default Listing;
