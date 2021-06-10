import React, { PureComponent } from 'react';
import './HomePage.css';
class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='container'>
          <img style={{ backgroundColor: 'red' }} width='130px' height='130px' />

          <h1 style={{ margin: 'auto' }}>COVID PORTAL</h1>
        </div>

        <div className='res'>
          <button>Resource Upload</button>
          <button>Resource Request</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
