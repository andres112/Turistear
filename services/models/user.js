var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//definir el esquema
var user_schema = new Schema({
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_birth: Date
});

//define un metodo virtual para trabajar con un valor que no se almacenara en BD
user_schema.virtual("password_confirm").get(function () { //obtiene el valor
    return this.p_c;
}).set(function (password) { //Fija el valor
    this.p_c = password;
})

//Crea la coleccion mediante el modelo
var User = mongoose.model("User", user_schema);

module.exports.user = User;
module.exports.user_schema = user_schema;