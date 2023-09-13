const express = require('express');
const response = require('../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/lists', lists)
router.get('/', list)
router.get('/:id', get);


// Internal functions
function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });

}
function lists(req, res) {
    Controller.lists()
        .then((listas) => {
            response.success(req, res, listas, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });

}
function get(req, res) {
    Controller.get(req.params.id)
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });

}


module.exports = router;