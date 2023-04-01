import React, { useEffect, useState } from "react";

function FakeApi02() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((response) => {
        setData(response);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
      {data.map((item, index) => (  
        <div key={index} className="col-md-3">
          <div className="card">
            <div className="card-body">
              <span className="card-title">UserId : {item.userId}</span> &nbsp;
              <span className="card-title">Id : {item.id}</span>              
              {/* substring use for limit the character with start and end index */}
              <h3 className="card-title">{item.title.substring(0, 36)}</h3>
              <p className="card-text">
              {item.body.substring(0, 130)}
              {/* we can use syntax like below if data not available in api/not provided by api */}
              {item.masaj?item.masaj:'masag not available'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FakeApi02;
