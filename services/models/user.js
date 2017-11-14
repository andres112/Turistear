var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sexo_posible = ["M", "F", "I"]

//definir el esquema
var user_schema = new Schema({
    name: String,
    username: String,
    password: {
        type: String,
        minlength: [5, "Minimo 5 caracteres"],
        required: true
    },
    age: {
        type: Number,
        min: [18, "Edad minima 18"],
        max: [100, "Edad maxima 100"]
    },
    email: String,
    date_birth: Date,
    sexo: {
        type: String,
        enum: {
            values: sexo_posible,
            message: "Las opciones aceptadas son M, F, I"
        }        
    }
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