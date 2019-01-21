import React from 'react';
import { Link } from 'react-router-dom';
import './Home.less';
import { myPicture } from '../../constants';

const Home = () => (
  <div className="Home">
    {/* <div className="Home__navigation">
      <Link to="/">Home</Link>
      <Link to="/nothome">Not Home</Link>
    </div> */}
    <div className="Home__content">
      Coming Soon..
      {/* <div className="Home__content__image">
        <img src={myPicture} />
      </div> */}
    </div>
  </div>
);

export default Home;
