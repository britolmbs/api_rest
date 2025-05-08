import User from "../models/User";

class UserController {
    async store(req, res) {
        const novoUser = await User.create({
            nome: '',
            email: '',
            password: '',
        });
        res.json(novoUser);
    }
}

export default new UserController();