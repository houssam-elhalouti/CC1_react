import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import './api.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function TpApi() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setContacts(data)
      })
    },[]);

  return (
    <div className={darkMode ? 'api-dark' : 'api-light'} style={{paddingBottom:"10px"}} >
      <Container>
      <h1 className='text-center'>{t(`api.title`)}</h1>
      <p className='text-center' style={{fontSize:"20px"}}>{t('api.description')}</p>
        <Form>
          <InputGroup className='mb-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='rechercher par nom d utilisateur'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.username.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TpApi;