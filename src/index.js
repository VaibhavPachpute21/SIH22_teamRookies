import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from './layout'
import Home from './components/home'
const App = () => {
    return (
        <div>
            <Layout>        
                <Router>
                    <Routes>
                        <Route path = "/" element={<Home/>}/>
                    </Routes>
                </Router>
            </Layout>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

