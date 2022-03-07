import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <a className="navbar-brand mb-3" href="#">Health-Care Channeling</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mb-3">
                        <li className="nav-item">
                        <a className="nav-link btn-outline-secondary btn-lg" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link btn-outline-secondary btn-lg" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link btn-outline-secondary btn-lg" href="#">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav mb-3">
                        <li className="nav-item">
                        <a className="nav-link btn-outline-secondary btn-lg" aria-current="page" href="#">Refund Request</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link btn-outline-secondary btn-lg" href="#">Refund Search</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link btn-outline-secondary btn-lg" href="/login">Login</a>
                        </li>
                        </ul>
                </div>
               
            </nav>
        )
    }
}

