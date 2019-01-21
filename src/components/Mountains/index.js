import React, { Component } from 'react';
import {
  FirstLayer,
  SecondLayer,
  ThirdLayer,
  FourthLayer,
  FifthLayer,
  SixthLayer,
  SeventhLayer,
} from '../../assets/mountains';
import './Mountains.less';

class Mountains extends Component {
  render() {
    return (
      <div className="Mountains">
        <div className="Mountains__seventh-layer">
          <SeventhLayer />
        </div>
        <div className="Mountains__sixth-layer">
          <SixthLayer />
        </div>
        <div className="Mountains__fifth-layer">
          <FifthLayer />
        </div>
        <div className="Mountains__fourth-layer">
          <FourthLayer />
        </div>
        <div className="Mountains__third-layer">
          <ThirdLayer />
        </div>
        <div className="Mountains__second-layer">
          <SecondLayer />
        </div>
        <div className="Mountains__first-layer">
          <FirstLayer />
        </div>
      </div>
    );
  }
}

export default Mountains;
