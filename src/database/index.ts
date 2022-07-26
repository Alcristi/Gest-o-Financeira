import mongoose from 'mongoose';


const database:string = process.env.MONGOLAB_URI || "";
mongoose.connect(database)
.then(()=>console.log('e don connect'))
.catch(err => console.log(err));


module.exports = mongoose;
