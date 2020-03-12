import * as React from 'react';

export class Spinner extends React.Component {
  constructor(props, context) {
    super(props, context);

    if (!this.props.name) {
      throw new Error('Spinner components must have a name prop.');
    }

    if (!this.props.loadingImage && !this.props.children) {
      throw new Error('Spinner components must have either a loadingImage prop or children to display.');
    }

    this.state = {
      show: this.props.hasOwnProperty('show') ? this.props.show : false
    };
  }

  render() {
    let divStyle = { display: 'inline-block' };
    if (this.state.show) {
      const { loadingImage } = this.props;
      return (
        <div style={divStyle}>
          {loadingImage && <img src={loadingImage} />}
          {this.props.children}
        </div>
      );
    }
    return (<div style={divStyle}></div>);
  }
}