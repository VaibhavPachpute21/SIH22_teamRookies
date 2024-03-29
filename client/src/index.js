import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Layout from "./layout";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import Solved from "./components/Solved/Solved";
import List from "./components/List/List";
import Grievance from "./components/Grievance/GrievancePdf"
import AddNewGrievance from "./components/Grievance/AddNewGrievance";
import GrievanceStatus from "./components/GrievanceStatus";
import AddInstituteGrievance from "./components/InstitutePages/addInstituteGrievance"
import InstituteProfile from "./components/InstitutePages/instituteProfile"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers/index'
import PrivateRoute from './components/private/private_route'
import FeedBackForm from './components/feedbackform/index'
import About from "./components/About/About";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)


const App = () => {

  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Registration" element={<Registration />}></Route>
            <Route path="/Dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />

            <Route exact path='/List' element={<PrivateRoute >
              <List />
            </PrivateRoute>
            } />



        
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Grievance/:id" element={<Grievance />} />
            <Route path="/AddNewGrievance" element={
            <PrivateRoute>
              <AddNewGrievance />
            </PrivateRoute>} />
            <Route path="/TrackGrievance/:id" element={<GrievanceStatus />} />
            <Route path="/AddInstituteGrievance" element={<AddInstituteGrievance />} />
            <Route path="/InstituteProfile" element={<InstituteProfile />} />
            <Route path="/feedback/:id" element={<FeedBackForm/>}/>
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </ChakraProvider>
)
