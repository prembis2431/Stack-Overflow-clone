import React from "react";
import { Routes, Route } from "react-router-dom"; 
// Switch: 
// - It's like an intersection where your application's URL meets different paths, and the Switch helps decide which path to take.
// - The Switch component is used to wrap a set of Route components. 
//   It ensures that only the first matching Route is rendered and stops looking for matches after finding the first one.
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
import Questions from "./pages/Questions/Questions";
import AskQuestions from "./pages/AskQuestions/AskQuestions";
import DisplayQuestions from "./pages/Questions/DisplayQuestions";

const AllRoutes = () => {
  return(

    <Routes>

    <Route path="/" element= {<Home/>}/>
    <Route path="/Auth" element= {<Auth/>}/>
    <Route path="/Questions" element= {<Questions/>}/>
    <Route path="/AskQuestions" element= {<AskQuestions/>}/>
    <Route path="/Questions/:id" element= {<DisplayQuestions/>}/> 
   
    </Routes>
  )
};
/*  /Questions/:id means, it will route to that particular question only */

export default AllRoutes;
