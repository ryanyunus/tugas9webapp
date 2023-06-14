import React from 'react';

class CustomButton extends React.Component {
  handleClick = () => {
    console.log('Tombol diklik!');
  }

  render() {
    const { label } = this.props;

    return (
      <button onClick={this.handleClick}>{label}</button>
    );
  }
}

export default CustomButton;
