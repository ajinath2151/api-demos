import React from "react";
import { useEffect, useState } from "react";
function NewsApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=a2f1e4f2054a46c0a5e7813a7d31564e"
    ).then((result) => {
      result.json().then((resp) => {
        setData(resp.articles);
      });
    });
  }, []);
  console.warn(data);

  return (
    <div>
      <h2>Fetch data from API</h2>
      <table border={1}>
        <tbody>
          <tr>
            <th>author</th>
            <th>Title</th>
            <th>Article URL</th>
            <th>Publish Date</th>
          </tr>
          {data.map((item, index) => (
            <tr>
              <td>{item.author}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{item.publishedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewsApi;
