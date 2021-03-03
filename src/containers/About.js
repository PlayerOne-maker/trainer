import React,{ Component } from 'react';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

const About = () => {
    return(
        <div>
            <Header />
            <div className="container col-md-5">
                <h4>Hello there</h4>
                <p className="text-justify mt-4 mb-4">
                    ssssssssssssssssssssssssssssssssssssssssssssssssssss
                    sssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    sssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                </p>
                <h5>From Sinotrans</h5>
            </div>
            <Footer company="test" email="etts@dfasd.com"/>
        </div>
    )
}

export default About;