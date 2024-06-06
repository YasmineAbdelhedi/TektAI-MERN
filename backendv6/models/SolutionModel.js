const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema({
    challengeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true
    },
    
    output: {
       type: Number,
       required: true 
    },
    dataset: { data: {
        type: String,

      },
      contentType: String,},
    readMeFile: { data: {
        type: String,
      },
      contentType: String,},
    rapport:{ data: {
        type: String,
      },
      contentType: String,},
    demo:{ data: {
        type: String,
      },
      contentType: String,},
    sourceCode:{ data: {
        type: String,
      },
      contentType: String,},
});

module.exports = mongoose.model('Solution', SolutionSchema);
