const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require("passport");
const cookieSession = require("cookie-session");
const userRoutes = require('./routes/User.Routes');
const courseRoutes = require('./routes/Course.Routes');
const contactUsRoutes =require ('./routes/contactUs.Routes')
const questionRoutes=require ('./routes/Question.Routes')
const challengeRoutes = require('./routes/Challenge.Routes')
const solutionRoutes = require('./routes/Solutions.Routes');
const companyRoutes = require('./routes/Company.Routes');
const teamRoutes = require('./routes/Team.Routes');
const globalSearchRoutes =require('./routes/Global.Routes');
const stripeRoutes = require('./routes/Stripe.Routes');
const notificationRoutes = require('./routes/notification.Routes');

const Message = require('./models/Message');
const stripe = require('stripe')('sk_test_51P9W2TJY1ZtideJd27RJ8XeWyToqw8QXyIXvaYVKkFOt98sUGDOZ8SPgYwhjVaKVnKrqxWfBcuHUUOsTdOW6LqLT00XqOvwVh8');
require('dotenv').config();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
    cookieSession({
        name: "session",
        keys: ["*"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: '*',
   credentials: true,
}));

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb+srv://zoxzo81:C0HZPADkCfa2QC4p@cluster0.hac6r6r.mongodb.net/tektai', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};


app.post('/api/stripe/create-checkout-session', async (req, res) => {
    const { products, success_url } = req.body; // Extract success_url from request body
    const prizeAmount = Math.round(products.prizeAmount); // Convert to number
    if (isNaN(prizeAmount)) {
        console.error('Invalid amount:', products.prizeAmount);
    } else {
        const lineItems = [{
            price_data: {
                currency: "usd",
                product_data: {
                    name: "sarrour",
                },
                unit_amount:prizeAmount, // Hardcoded value for testing
            },
            quantity: 1
        }];

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: success_url, // Include the success_url parameter
            cancel_url: success_url, // Specify a cancel URL as well
        });
        res.json({ id: session.id });
    }
});

connectToMongo();
app.use('/api/notif', notificationRoutes);
app.use('/api/contactUs', contactUsRoutes);
app.use('/api/askUs', questionRoutes);
app.use('/api/challenge', challengeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/solution', solutionRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/global', globalSearchRoutes);
app.use('/api/stripe', stripeRoutes);
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await Message.find({});
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).send('Server error');
    }
});
app.get('/messages', async (req, res) => {
    try {
        // Extract receiver and sender values from query parameters
        const { receiver, sender } = req.query;
        
        // Query messages from the database where the receiver is the current user and the sender is the selected user
        const sentMessages = await Message.find({ receiver: sender, sender: receiver });
        
        // Query messages from the database where the receiver is the selected user and the sender is the current user
        const receivedMessages = await Message.find({ receiver: receiver, sender: sender });
        
        // Combine both lists of messages
        const messages = [...sentMessages, ...receivedMessages];
        
        // Return the combined list of messages as a response
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).send('Server error');
    }
});

// app.get('/messages', async (req, res) => {
//     try {
      
//         // Extract receiver and sender values from query parameters
//         const { receiver, sender } = req.query;
        
//         // Query messages from the database based on receiver and sender values
//         const messages = await Message.find({ receiver, sender });
        
//         // Return the messages as a response
//         res.status(200).json(messages);
//     } catch (error) {
//         console.error('Error retrieving messages:', error);
//         res.status(500).send('Server error');
//     }
// });
// WebSocket handling
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', async (msgData) => {
        console.log('message: ', msgData);
        try {
            const newMessage = new Message({
                text: msgData.text,
                sender: msgData.sender,
                receiver: msgData.receiver
            });
            const savedMessage = await newMessage.save(); // Save message to database
            
            io.emit('chat message', savedMessage); // Broadcast the message to all connected clients
        } catch (error) {
            console.error('Error saving message:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
