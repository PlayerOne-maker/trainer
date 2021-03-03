import React,{ Component } from 'react';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';

const NotFound = () => {
    return(
        <div>
            <Header />
                <div className="container col-md-8 text-center">
                    <h1 className="mt-5">404</h1>
                    <h2 className="mb-4">Not Found</h2>
                    <p>ไม่เจอเว้ย</p>
                </div>
            <Footer />
        </div>
    )
}

export default NotFound;