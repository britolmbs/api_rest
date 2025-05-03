class HomeControler {
    index(req, res) {
        res.json({
           tudoc: true, 
        });
    }
}

export default new HomeControler();