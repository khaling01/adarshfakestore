import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                        <p className="card-text lead fs-2">Enjoy this summer with 25% discount on all products</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}
