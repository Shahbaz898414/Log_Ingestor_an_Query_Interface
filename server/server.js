// mongodb+srv://shahbaz898khan:<password>@cluster0.lodiowi.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Log = require('./Log'); // Adjust the path as needed

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const DB = "mongodb+srv://shahbaz898khan:npKFaYZoYLnMAzLx@cluster0.n5ovxnf.mongodb.net/?retryWrites=true&w=majority";
// npKFaYZoYLnMAzLx

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> {
  console.log(`connection sucessful`);
}).catch((err)=>console.log(err)
)


const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


app.post('/api/Log', (req, res) => {
  const newLog = new Log(req.body);

  newLog.save()
    .then(() => res.json('Log added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


app.get('/',(req,res)=> {
  res.send(`shabaz Hello world from the server`);
});

// console.log("shahabz")



app.listen(3000,()=> {
  console.log(`server is running at port no 3000`)
})

