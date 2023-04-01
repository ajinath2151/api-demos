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
            <td>author</td>
            <td>Title</td>
            <td>Article URL</td>
            <td>Publish Date</td>
          </tr> 
          
        </tbody>
      </table>
    </div>
  );
}

export default NewsApi;
