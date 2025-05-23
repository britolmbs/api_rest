"use strict";Object.defineProperty(exports, "__esModule", {value: true});

class HomeControler {
     async index(req, res) {
        res.json('index');
    }
}

exports. default = new HomeControler();