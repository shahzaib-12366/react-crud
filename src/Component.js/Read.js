import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  // const [tabledark, setTableDark] = useState("");
  function getData() {
    axios
      .get("https://63e67e3683c0e85a8694fdab.mockapi.io/user")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://63e67e3683c0e85a8694fdab.mockapi.io/user/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          // onClick={() => {
          //   if (tabledark === "table-dark") setTableDark("");
          //   else setTableDark("table-dark");
          // }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      {/* className={`table ${tabledark}`} */}
      <table  class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};
export default Read;