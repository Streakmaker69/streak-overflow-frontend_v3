import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

import Questions from './pages/Questions/Questions';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import UserProfile from './pages/UserProfile/UserProfile';
import Portfolio from './pages/Portfolio/Portfolio';
import Community from './pages/Community/Community';
import Profile from './pages/Community/Profile/Profile'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/About" element={<Portfolio />} />
      <Route path="/Product" element={<Portfolio />} />
      <Route path="/Community" element={<Community />}/>
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/Community/profile/:name" element={<Profile />} />
    </Routes>
  )
}

export default AllRoutes