import * as React from 'react';
import Listing from './listing.jsx';

import './app.css';

class Dashboard extends React.Component {
  state = {
    listings: [
      {
        address: '181 Fern St, Toronto Ontario',
        price: '100000',
        description: '1 Bed 1 Bath 760 SF',
      },
      {
        address: '181 Fern St, Toronto Ontario',
        price: '400000',
        description: '3 Beds 2 Baths 1254 SF',
      },
    ],
  }

  handleAddItem = () => {
    const newItem = {
      address: '',
      price: '',
      description: '',
    };

    this.setState(prevState => ({
      listings: [...prevState.items, newItem],
    }));
  }

  handleChange = () => {}

  render() {
    const { listings } = this.state;

    return (
      <div className="root">
        <div className="add-item">
          <input
            className="text-input shadow"
            type="text"
            value=""
            placeholder="address eg 123 Davis Ave, Newmarket, ON"
          />
          <input
            className="text-input shadow"
            type="text"
            value=""
            placeholder="price eg. 450000"
          />
          <input
            className="text-input shadow"
            type="text"
            value=""
            placeholder="description eg. 4 Beds 2 Baths 1400 SF"
          />
          <button type="button" className="add-button shadow">
             + add
          </button>
        </div>
        {listings.map((listing) => (
          <Listing listing={listing} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
