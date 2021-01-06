import { Table, Badge } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/todos");
      setData(result.data.slice(0, 10));
    };

    fetchData();
    const fetchDataInterval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(fetchDataInterval);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <Badge
                  style={{ width: "100px" }}
                  pill
                  variant={todo.completed ? "success" : "danger"}
                >
                  {todo.completed ? "Available" : "Not Available"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
