import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          className="card m-3 "
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img className="card-img-top" src="..." alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 w-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>


                <select className="m-2 h-100 w-100 bg-success rounded">
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>

            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
