import React from 'react'
class coorCake extends React.Component {

  const Cake = (props) => {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
    }
    onclick(e) {
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  }

  export default Cake