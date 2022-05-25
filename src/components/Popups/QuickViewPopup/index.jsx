import React from "react";

class QuickViewPopup extends React.Component {
  render() {
    return <div>{this.props.render()}</div>;
  }
}

export default QuickViewPopup;
