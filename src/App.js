import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Import Link

import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Home from './components/Home';

export class App extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div className='d-flex gap-5'>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/first"}>First</Link>
                        <Link to={"/second"}>Second</Link>
                        <Link to={"/third"}>Third</Link>
                    </div>

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='first' element={<First />} />
                        <Route path='second' element={<Second />} />
                        <Route path='third' element={<Third />} />
                    </Routes>

                </div>
            </div>
        );
    }
}
