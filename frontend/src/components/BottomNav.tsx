import React from "react";
import { NavLink } from "react-router-dom";
import { User, Calendar, MessageCircle, Target } from "lucide-react";
import "./BottomNav.css";

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/profile" className="nav-item">
        <User size={24} />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/calendar" className="nav-item">
        <Calendar size={24} />
        <span>Calendar</span>
      </NavLink>
      <NavLink to="/chat" className="nav-item">
        <MessageCircle size={24} />
        <span>Chat</span>
      </NavLink>
      <NavLink to="/goals" className="nav-item">
        <Target size={24} />
        <span>Goals</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
