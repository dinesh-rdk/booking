import { Button, Card, Row, Form } from 'react-bootstrap';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';

export default function Register() {
  const [machines, setMachines] = useState([]);
  const [data, setData] = useState({ email: '', password: '', machine: '' });

  useEffect(() => {
    console.log('Start');
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      setMachines(result.data);
      console.log('Result', result.data);
    };

    fetchData();
    console.log('End');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post('https://jehocode.com/users', data).then((res) => {
      console.log(res);
    });
  };

  const handleChange = (field, value) => {
    console.log('sdsadsaddsad', value);
    setData({ ...data, [field]: value });
  };

  return (
    <Fragment>
      <Row className="justify-content-md-center">
        <Card style={{ marginTop: 100 }}>
          <Card.Header>REGISTER</Card.Header>
          <Card.Body style={{ width: 450 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleChange('password', e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridState">
                <Form.Label>Machine</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => handleChange('machine', e.target.value)}
                >
                  {machines.map((machine) => (
                    <option
                      key={machine.id}
                    >{`${machine.name} @ ${machine.username}`}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Fragment>
  );
}
