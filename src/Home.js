import React from 'react'
import { Link } from "react-router-dom";


export const Home = () =>(
    <div className="home">
      <h1>Home Page</h1>
      <h1>To get started with React Router in a web app, you’ll need a React web app. </h1> 
      <p>If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router</p> 
      <h2>install create-react-app and make a new project with it. </h2>
      <Link to="/signup">
        <button variant="outlined">
             Sign up
         </button>
      </Link>
    </div>

  )

