// @flow
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { baseURL } from '../Kitten/apiClient';
import { Link } from 'react-router-dom';

const ListarKittens = ({ items, openModal }) => {

  return (
    <Row>
      <Col lg={12}>
        <div className="grid-container">

          {items?.body?.map((kitten) => (
            <div class="grid-item">
              <Link key={kitten.name} to='#' className="action-icon " onClick={() => openModal({
                name: kitten.name,
                description: kitten.description,
                imageFileName: kitten.imageFileName,
                gender: kitten.gender,
                age: kitten.age,
                isopenModal: true
              })}>
                <img
                  className="imgCat"
                  src={`${baseURL}/images/${kitten.imageFileName}`} alt={kitten.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};
export default ListarKittens;
