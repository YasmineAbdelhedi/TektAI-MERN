import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faExclamationCircle, faInfoCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const NotificationComponent = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/notif/${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotifications();
  }, [userId]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getIcon = (notification) => {
    switch (notification.type) {
      case "error":
        return faExclamationCircle;
      case "info":
        return faInfoCircle;
      case "success":
        return faCheckCircle;
      default:
        return faBell;
    }
  };

  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBell} />
        {notifications.length > 0 && (
          <span className="badge badge-danger">{notifications.length}</span>
        )}
      </button>
      {isOpen && (
        <div className="dropdown-menu" style={{ display: "block" }}>
          <div className="notification-container">
            <ul className="notification-list">
              {notifications.map((notification) => (
                <li key={notification._id} className="list-group-item notification-item">
                  <FontAwesomeIcon icon={getIcon(notification)} className="mr-2" />
                  {notification.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <style>
        {`
.notification-container {
    overflow: hidden; /* Hide overflow for rounded corners */
    border-radius: 5px; /* Apply rounded corners to the wrapper */
  }
  
  .notification-list {
    max-height: 150px;
    overflow-y: auto;
    background-color: #f1f1f0; /* Light gray background */
  }
  
  .btn{
    background-color: transparent;
  }
           .notification-item {
            background-color: #e0e0ff; /* Lighter blue for items */
            color: black;
            border-radius: 5px; /* Reduced corner radius for cleaner look */
            padding: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .notification-item:hover {
            transform: scale(1.03); /* Subtler hover effect */
            background-color: #d0d0ff; /* Slightly darker blue on hover */
          }

          .mr-2 {
            margin-right: 10px; /* Spacing between icon and message */
          }
        `}
      </style>
    </div>
  );
};

export default NotificationComponent;