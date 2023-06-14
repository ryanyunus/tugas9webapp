import React from 'react';

class HitungKarakter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      karakter: 0
    };
  }

  handleChange(event) {
    const jumlahKarakter = event.target.value.length;
    this.setState({ karakter: jumlahKarakter });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <p>Jumlah karakter: {this.state.karakter}</p>
      </div>
    );
  }
}

export default HitungKarakter;
