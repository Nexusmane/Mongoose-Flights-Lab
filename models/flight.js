const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United'],    
    },
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: { 
        type: Number,
        minimum: 10,
        maximum: 9999,
        required: true,
    },
    departs: {
        type: Date,
        default: function(){
            return +new Date() + 365*24*60*60*1000}
    }, 
    destinations: {
        type: [destinationSchema],
    }
});



module.exports = mongoose.model('Destination', destinationSchema);
module.exports = mongoose.model('Flight', flightSchema);