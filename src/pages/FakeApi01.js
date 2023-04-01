import React, { useEffect, useState } from "react";

function FakeApi01() {
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
      <div>
        <table border={2}>
          <tbody>
            <th>
              <tr>
                <td>User Id</td>
              </tr>
            </th>
            <th>
              <tr>
                <td>Id</td>
              </tr>
            </th>
            <th>
              <tr>
                <td>Title</td>
              </tr>
            </th>
            <th>
              <tr>
                <td>Body</td>
              </tr>
            </th>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FakeApi01;
