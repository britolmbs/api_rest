

class HomeControler {
     async index(req, res) {
        res.json('index');
    }
}

export default new HomeControler();