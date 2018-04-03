const users = require('../models/users');

let id = 1;

module.exports = {
    login: (req,res,next) => {
        const { username,password } = req.body;

        let user = users.map( user => user.username === username && user.password === pasword)

        if( user ){
            req.session.user.username = user.username;
            res.status(200).json(req.session.user);
        }
        res.status(500).json(err => console.log(err));
    },
    register: (req,res,next) => {
        users.push({
            id: id,
            username: req.body.username,
            password: req.body.password
        })
        req.session.user.username = req.body.username;
        id++
        res.status(200).json(req.session.user);
    },
    signout: (req,res,next) => {
        req.session.destroy()
        res.status(200).json(req.session);
    },
    getUser: (req,res,next) => {
        res.status(200).json(req.session.user);
    }
}