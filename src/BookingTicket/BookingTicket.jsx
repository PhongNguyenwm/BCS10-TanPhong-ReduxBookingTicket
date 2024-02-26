import React, { Component, Fragment } from "react";
import "./main.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/BookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1
                  className="text-warning display-5"
                  style={{ fontWeight: "bold" }}
                >
                  MOVIE SEAT SELECTION
                </h1>
                <p className="mt-2 text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </p>
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen "></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1 className="text-success mt-4" style={{ fontSize: "30px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
