// @flow
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Spinner from './Spinner';

type ItemsModal = {
    Obj: {};
    isopenModal: Boolean;
    openModal: void;
};
const ModalKittens = ({ openModal, Obj, loadings, isopenModal, closeModal }: ItemsModal): React$Element<React$FragmentType> => {
    return (
        <>
            <Modal show={isopenModal} onHide={openModal}>
                {
                    loadings ?
                        <Modal.Body>
                            <br />
                            <h4 className="modal-title">{Obj?.name}</h4>
                            <br />
                            <Modal.Body>
                                <hr />
                                <br />
                                <h6>Description</h6>
                                <p>{Obj?.description}</p>
                                <br />
                                <h6>Age</h6>
                                <p>{Obj?.age}</p>
                                <h6>Gender</h6>
                                <p>{Obj?.gender}</p>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="light" onClick={() => closeModal()}>
                                    Close
                                </Button>{' '}
                            </Modal.Footer>
                        </Modal.Body> : <Modal.Body><Spinner /></Modal.Body>
                }
            </Modal>
        </>
    );
};

export default ModalKittens;
