import axios from "axios";
import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const newsHeadlinesApi = () => {
    console.log("newsData initial value", typeof data, data);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=afd69d3d43a747e49ff5595fdea33caa"
      )
      .then((response) => {
        setData(response.data.articles);
        console.log("data final value", typeof data, data);
      });
  };
  const newsEverythingApi = () => {
    console.log("newsData initial value", typeof data, data);
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=afd69d3d43a747e49ff5595fdea33caa"
      )
      .then((response) => {
        setData(response.data.articles);
        console.log("data final value", typeof data, data);
      });
  };

  useEffect(() => {
    newsHeadlinesApi();
    newsEverythingApi();
  }, []);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => newsEverythingApi()}
          >
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => newsHeadlinesApi()}
                >
                  Headlines
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container text-center">
        <ul>
          <div className="row align-items-start">
            {data.map((value) => {
              return (
                <div className="col-md-4">
                  <div
                    className="card"
                    style={{ width: "18rem", marginBottom: "2rem" }}
                  >
                    <img
                      src={value.urlToImage}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href={value.url} className="btn btn-primary">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
