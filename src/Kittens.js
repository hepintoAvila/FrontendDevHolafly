import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { useKittens, useSlides } from './hoock/';

const Footer = React.lazy(() => import('./components/Footer'));
const Topbar = React.lazy(() => import('./components/Topbar'));
const Slides = React.lazy(() => import('./components/Slides'));
const ModalKittens = React.lazy(() => import('./components/ModalKittens'));
const ListarKittens = React.lazy(() => import('./components/ListarKittens'));

const loading = () => <div className=""></div>;
const Kittens = () => {

  const { kittens,
    openModal,
    isopenModal,
    itemsDetal,
    loadings,
    closeModal } = useKittens();
  const { items } = useSlides();
  return (<>
    <div className="wrapper">
      <div className="content-page">
        <div className="content">
          <Container fluid>
            <Suspense fallback={loading()}>
              <Topbar hideLogo={true} />
            </Suspense>
            <Suspense fallback={loading()}>
              <Slides items={items?.body} />
            </Suspense>
            <Suspense fallback={loading()}>
              <ListarKittens items={kittens} openModal={openModal} isopenModal={isopenModal} />
            </Suspense>
          </Container>
        </div>
        <Suspense fallback={loading()}>
          <Footer />
        </Suspense>
      </div>
      <Suspense fallback={loading()}>
        <ModalKittens openModal={openModal}
          isopenModal={isopenModal}
          Obj={itemsDetal}
          kittens={kittens}
          loadings={loadings}
          closeModal={closeModal} />
      </Suspense>
    </div>
  </>
  );
};

export default Kittens;
