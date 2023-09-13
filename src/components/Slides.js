// @flow
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
const ItemsSlider = React.lazy(() => import('../components/ItemsSlider'));

const Slides = ({ items }) => {
  return (
    <Card>
      <Card.Body>
        <Carousel indicators={true} controls={false}>
          {items?.map((p, index) => (
            <Carousel.Item key={p.key}>
              <ItemsSlider items={
                { key: p.key, mensaje: p.mensaje, image: p.image }
              } />
            </Carousel.Item>
          ))
          }
        </Carousel>{' '}
      </Card.Body>{' '}
    </Card>
  );
};
export default Slides;
