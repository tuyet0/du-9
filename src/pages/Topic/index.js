import { useEffect, useState } from "react";
import * as topics from "../../services/topicsService";
import { Link } from "react-router-dom";

function Topic() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await topics.getListTopic();
      setData(result);
    }
    fetchApi();
  }, []);

  return (
    <>
      <h2>Danh sách chủ đề ôn luyện</h2>
      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên chủ đề</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={"/quiz/" + item.id}>
                    <button className="button">
                      Làm bài
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Topic;