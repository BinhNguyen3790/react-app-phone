import { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  dataJson = [
    { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" },
    { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg" },
    { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraSau: "Chính 12 MP & Phụ 12 MP", cameraTruoc: "7 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" },
  ];

  state = { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" };

  renderPhone = () => {
    return this.dataJson.map((phone, index) => {
      return (
        <div className="col-4 mb-3" key={index}>
          <Product phoneProps={phone} renderDetailFc={this.renderDetail} />
        </div>
      );
    });
  };

  renderDetail = (phone) => {
    this.setState(phone);
  };

  render() {
    return (
      <div>
        <div className="row">
          <h2>danh sach san pham</h2>
          {this.renderPhone()}
        </div>
        <div className="row mt-5">
          <h2>San pham chi tiet</h2>
          <div className="col-4">
            <h3>{this.state.tenSP}</h3>
            <img className="w-100" src={"assets/" + this.state.hinhAnh} />
          </div>
          <div className="col-8">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Man Hinh</th>
                    <td>{this.state.manHinh}</td>
                  </tr>
                  <tr>
                    <th>He Dieu Hanh</th>
                    <td>{this.state.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th>Camera Truoc</th>
                    <td>{this.state.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th>Camera Sau</th>
                    <td>{this.state.cameraSau}</td>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <td>{this.state.ram}</td>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <td>{this.state.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
