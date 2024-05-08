import { Component } from "react";
export default class Product extends Component {
  render() {
    return (
      <div className="card h-100">
        <img className="card-img-top" src={"assets/" + this.props.phoneProps.hinhAnh} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{this.props.phoneProps.tenSP}</h4>
          <p className="card-text">{this.props.phoneProps.manHinh}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.renderDetailFc(this.props.phoneProps);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
