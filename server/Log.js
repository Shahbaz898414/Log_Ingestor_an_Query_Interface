const mongoose = require('mongoose');


const logSchema = new mongoose.Schema({
  level: {
    type:String,
    require:true
  },
  message:{
    type:String,
    require:true
  },
  resourceId:{
    type:String,
    require:true
  },
  timestamp: {
    type: Date,
    // default: Date.now,
    require:true
  },
  traceID: {
    type:String,
    require:true
  },
  spanID: {
    type:String,
    require:true
  },
  commit: {
    type:String,
    require:true
  },
  metadata: {
    parentResourceId: {
      type:String,
      require:true
    },
  },
});




const Log = mongoose.model('Log', logSchema);



module.exports = Log;