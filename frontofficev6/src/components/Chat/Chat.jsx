import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios'; // Import axios for API requests
import Layout from '../../layouts/Layout';
import CounterAreaTwo from '../CounterAreas/CounterAreaTwo';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        country: '',
        profession: '',
        picture: "",
        aboutMe: "",
        facebookLink: "",
        instagramLink: "",
        linkedInLink: "",
        githubLink: "",
        cv: "",
        userId: '', // Add userId field to store current user ID
    });
    const [users, setUsers] = useState([]); // State to store all users for recipient selection
    const [selectedRecipient, setSelectedRecipient] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const access_token = localStorage.getItem('access_Token');
                if (!access_token) {
                    throw new Error('Access Token not found');
                }

                const response = await axios.get('http://localhost:3000/api/user/current', {
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                        Authorization: access_token,
                    },
                });
                setUserData({
                    ...userData,
                    firstname: response.data.result?.firstname || '',
                    lastname: response.data.result?.lastname || '',
                    email: response.data.result?.email || '',
                    phone_number: response.data.result?.phone_number || '',
                    country: response.data.result?.country || '',
                    profession: response.data.result?.profession || '',
                    picture: response.data.result?.picture || '',
                    aboutMe: response.data.result?.aboutMe || '',
                    facebookLink: response.data.result?.facebookLink || '',
                    githubLink: response.data.result?.githubLink || '',
                    linkedInLink: response.data.result?.linkedInLink || '',
                    instagramLink: response.data.result?.instagramLink || '',
                    userId: response.data.result?._id || '', // Store user ID
                });
                console.log('userData:', userData);
            } catch (error) {
                console.error('Failed to fetch user data:', error.message);
            }
        };

        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/');
                setUsers(response.data);
            } catch (error) {
                console.error('Failed to fetch users:', error.message);
            }
        };

        fetchUserData();
        fetchAllUsers();
    }, []);

    const socket = io('http://localhost:3000', { transports: ['websocket'] });

    useEffect(() => {
        console.log('Socket connected:', socket); // Log socket connection
        
        const handleChatMessage = (msg) => {
            console.log('Received message:', msg); // Log received message
            // Check if the message is intended for the current user
            if (msg.receiver === userData.userId || msg.sender === userData.userId) {
                // Update messages state only if the message is for the current user
                console.log('Updating messages:', msg); // Log message being added to state
                setMessages((prevMessages) => [...prevMessages, msg]);
                console.log('Updated messages state:', messages); // Log updated messages state
            }
        };
    
        socket.on('chat message', handleChatMessage);
    
        // Cleanup function to remove event listener when component unmounts
        return () => {
            socket.off('chat message', handleChatMessage);
        };
    }, [socket, userData.userId]);
    
    const handleMessageSend = () => {
        const messageData = {
            text: input,
            sender: userData.userId, // Use current user ID as sender
            receiver: selectedRecipient, // Use selected recipient's user ID
        };
        socket.emit('chat message', messageData); // Emit message to the server
        setInput('');
//  try {
//                 const response = await axios.get('http://localhost:3000/messages', {
//                     params: {
//                         sender: userData.userId, // Current user ID as sender
//                         receiver: selectedRecipient // Selected recipient's user ID
//                     }
//                 });
//                 // Set the messages state with the retrieved messages
//                 setMessages(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch messages:', error.message);
//             }

        
    };
    useEffect(() => {
        // Fetch messages based on the selected sender and receiver
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:3000/messages', {
                    params: {
                        sender: userData.userId, // Current user ID as sender
                        receiver: selectedRecipient // Selected recipient's user ID
                    }
                });
                // Set the messages state with the retrieved messages
                setMessages(response.data);
            } catch (error) {
                console.error('Failed to fetch messages:', error.message);
            }
        };
    
        // Fetch messages when selectedRecipient or userData changes
        if (selectedRecipient && userData.userId) {
            fetchMessages();
        }
    }, [selectedRecipient, userData.userId]);
    

    return (
        <Layout
        header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}
    >
        <h1>Chat Interface</h1>
        <div className="message-container">
            {messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)).map((msg, index) => {
                const isSender = msg.sender === userData.userId;
                const senderName = isSender ? "You" : users.find(user => user._id === msg.sender)?.firstname || 'Unknown User';
                const formattedTime = new Date(msg.timestamp).toLocaleString();

                return (
                    <div key={index} className={`message ${isSender ? 'sender' : 'receiver'}`}>
                        <div className="message-content">
                            <strong>{senderName}:</strong> {msg.text}
                            <br />
                            <small>{formattedTime}</small>
                        </div>
                    </div>
                );
            })}
        </div>
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <select value={selectedRecipient} onChange={(e) => setSelectedRecipient(e.target.value)}>
                <option value="">Select recipient</option>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>{user.firstname} {user.lastname}</option>
                ))}
            </select>

            <button onClick={handleMessageSend}>Send</button>
        </div>
        <style>
            {
                `
                .message-container {
                    display: flex;
                    flex-direction: column;
                }
                
                .message {
                    padding: 10px;
                    margin-bottom: 10px;
                    max-width: 70%;
                }
                
                .sender {
                    align-self: flex-end;
                    background-color: #DCF8C6;
                    border-radius: 10px 10px 0 10px;
                }
                
                .receiver {
                    align-self: flex-start;
                    background-color: #EAEAEA;
                    border-radius: 10px 10px 10px 0;
                }
                
                .message-content {
                    padding: 5px;
                }
                
                `
            }
        </style>
    </Layout>
    );
};

export default Chat;
