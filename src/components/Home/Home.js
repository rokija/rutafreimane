import React, { Component } from 'react';
import Blur from 'react-css-blur';
import Mountains from '../Mountains';
import Main from '../Main';
import MyPicture from '../../assets/mypicture.png';
import './Home.less';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      blurOn: false,
    };

    this.testRef = React.createRef();
  }


  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

blurOn = (blurOn) => {
  this.setState({ blurOn });
}

onScroll = (e) => {
  const { top } = this.testRef.current.getBoundingClientRect();

  if (top < 500) {
    this.blurOn(true);
  } else {
    this.blurOn(false);
  }
}

render() {
  return (
    <div className="Home">
      <div className="Home__content__container">
        <Blur radius={this.state.blurOn ? '5px' : '0'} transition="400ms">
          <div className="Home__content">
            <div className="Home__content__image">
              <div className="Home__content__image__img">
                <img src={MyPicture} />
              </div>
              <div className="Home__content__image__title">
              Ruta Freimane
              </div>
            </div>

            <Mountains />
          </div>
        </Blur>

      </div>

      <div className="Home__test" ref={this.testRef}>
        <Main />
      </div>

    </div>
  );
}
}

export default Home;
