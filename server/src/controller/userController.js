const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const bcrypt = require('bcrypt');
const saltRounds = 8;

function jwtSignUser (user) {
    const ONE_WEEK =  60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {

            let usrHashed = req.body;
            console.log("jel radi ovde");
            await bcrypt.hash(usrHashed.password, saltRounds).then(function(hash) {
                usrHashed.password = hash;
            });

            const user = await User.create(usrHashed).catch(error => {
                    console.log("AuthController GRESKA ", error);
                });


            const userJson = user.toJSON();

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });


        } catch (error) {
            res.status(400).send({
                error: 'The email account is used by another user'
            });
        }
    },
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            }).catch(error => {
                console.log(" GRESKA ", error)
            });

            if(!user) {
                return res.status(403).send({
                    error: 'The login info was incorrect'
                })
            }

            //console.log("DA LI OVDE PUCA DA ZNAMO");
            const isPasswordValid = user.comparePassword(password);
            
            

            if(!isPasswordValid) {
                return res.status(403).send({
                    error: 'The password was incorrect',
                    passInvalid: isPasswordValid
                });
            }

            const userJson = user.toJSON();

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
            console.log("ULOGOVAO SE KORISNIK");

        } catch (error) {
            res.status(500).send({
                error: 'The error was caused by a server'
            });
        }
    },
    async getAllUsers(req, res) {
        try{
            const users = await User.findAll();
            res.send(users);
        }
        catch(err){
            console.log(err);
        }
        
    }
}