import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Home from './pages/home';
import Signup from './pages/signup';

const App = () => {
    const [ethAddress, setEthAddress] = useState("");

    const connect_wallet = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Linked account: ", accounts[0])
        setEthAddress(accounts[0])
       
        // await ethereum
        //     .request({ method: 'eth_requestAccounts' })
        //     .then((accounts) => {
        //         console.log("Linked account: ", accounts[0])
        //         setEthAddress(accounts[0])
        //     })
        //     .then(() => (window.location = '/home'))
        //     .catch((err) => console.log(err));
    };

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Landing connect_wallet={connect_wallet} />}
                />
                <Route
                    exact
                    path="/home"
                    element={<Home />}
                />
                <Route
                    exact
                    path="/signup"
                    element={<Signup />}
                />
                <Route path="*" element={<Landing connect_wallet={connect_wallet}/>} />
            </Routes>
        </Router>
    );
};

export default App;