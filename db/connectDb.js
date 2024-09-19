const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/uuu'

const connectdb = () =>{

    return(
        mongoose
        .connect(url)
        .then(() =>{
            console.log("success")
        })
        .catch((error) => {
            console.log(error)
        })
    )
    // return mongoose.connect(url)
    // .then(() => {
    //     console.log('connected succrssfully')
    // })
    // .catch((error) => {
    //     console.log('error')
    // })
}


module.exports = connectdb