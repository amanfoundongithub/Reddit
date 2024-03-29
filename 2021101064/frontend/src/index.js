import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './Pages/Authentication/SignIn';
import Profile from './Pages/Profile/Profile';
import ViewProfile from './Pages/Profile/OtherProfile';
import MySubGreddits from './Pages/Profile/MySubGreddits';
import Page from './Pages/SubGreddiits/Page';
import EditPage from './Pages/SubGreddiits/EditPage';
import FollowerPage from './Pages/SubGreddiits/FollowerPage';
import ModPage from './Pages/SubGreddiits/ModeratorPage';
import HomePage from './Pages/Home/HomePage';
import MySavedOnes from './Pages/Profile/MySavedPosts';
import ReportedPostPage from './Pages/SubGreddiits/ReportPost';
import StatsPage from './Pages/SubGreddiits/StatsPage';
// import MessagePage from './Pages/Message';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
            <Route path="/"                    element ={<HomePage />} />
            <Route path='/profile'             element ={<Profile />}/>
            <Route path='/signin'              element ={<SignIn/>}/>
            <Route path='/profile/:username'   element ={<ViewProfile />} />
            <Route path='/mysg'                element ={<MySubGreddits />} />
            <Route path='/gr/:name'            element ={<Page />} />
            <Route path='/gr/:name/editpage'   element ={<EditPage />}/>
            <Route path='/gr/:name/followers'  element ={<FollowerPage />}/>
            <Route path='/gr/:name/mod'        element ={<ModPage />}/>
            <Route path='/mysaved'             element ={<MySavedOnes />}/> 
            <Route path='/gr/:name/reports'    element ={<ReportedPostPage />}/>
            <Route path='/gr/:name/stats'      element ={<StatsPage />} />
           </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
