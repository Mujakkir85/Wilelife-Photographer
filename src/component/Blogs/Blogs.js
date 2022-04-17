import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h2>1) Difference between authorization and authentication.</h2>
            <div>
                <h4>Authentication verifies who the user is.Authorization determines what resources a user can access.</h4>
                <p>
                    authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                    The situation is like that of an airline that needs to determine which people can come on board.
                    The first step is to confirm the identity of a passenger to make sure they are who they say they are.
                    Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.
                    In the digital world, authentication and authorization accomplish these same goals.
                    Authentication is used to verify that users really are who they represent themselves to be.
                    Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.
                </p>
            </div>

            <div>
                <h2>2) Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h4>Though firebase has a lots of feature but ame using firebase just for authentication.</h4>
                <p>
                    1) Parse – Open Source Backend Platform;
                    2) Back4app – Parse Hosting Platform;
                    3) Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                    4) Backendless – Mobile Backend and API Services Platform;
                    5) Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
                    6) Pubnub – Real-time APIs and Global Messaging;
                    7) Kumulos – App Performance Management;
                    8) Game Sparks – Game Backend Platform;
                    9) Hoodie – Generic backend with a client API for Offline First applications;
                    10) Appwrite – Open-Source backend for Flutter developers
                    11) Deployd – Simple core library, with a modular API for your application;
                    12) NHost – Accelerates development and provides full control;
                    13) Amplify JS – Open-source Javascript framework;
                    14) Heroku – Platform as a service backed by Salesforce.
                </p>
            </div>

            <div>
                <h2>3) What other services does firebase provide other than authentication</h2>
                <p>
                    1)Cloud Firestore
                    2)Cloud Functions
                    3)Firebase Realtime Database
                    4)Hosting
                    5)Cloud Storage
                    6)Google Analytics
                    7)Predictions
                    8)Cloud Messaging
                    9)Dynamic Links
                    10)Remote Config

                </p>
            </div>
        </div >
    );
};

export default Blogs;