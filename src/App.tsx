import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function App() {
  return (
    <div className=" h-[100vh] w-full grid place-items-center ">
      <img src="./images/HQtomoca.png position-absolute" alt="" />
      <div className=" h-[95vh] w-[95%] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg grid place-items-center  ">
        <Card className="w-[70rem] pr-10 mt-10 rounded-3xl">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <img
                className="w-full grid place-items-center"
                src="./images/Tomoca.png"
                alt=""
              />
            </Grid>
            <Grid className="grid place-items-center h-[20vh]" item xs={6}>
              <img className="w-20 mt-5 " src="./images/logofull.svg"></img>
              <h2 className="text-2xl text-[#FF7A11] font-bold mt-10  ">
                ADMIN LOGIN
              </h2>
              <p className="w-[25rem] text-[#C2C2C1] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                illo recusandae magni id ut quisquam nisi
              </p>
              <form>
                <input
                  className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10 py-3 px-2 leading-tight outline-none"
                  type="text"
                  placeholder="UserName"
                  aria-label="UserName"
                  name="UserName"
                />
                <input
                  className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10 py-3 px-2 leading-tight outline-none"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  name="Password"
                />
                <button className="w-full p-2 mt-10 text-white bg-[#FF7A11]">
                  Login
                </button>
              </form>
            </Grid>
          </Grid>
        </Card>
        {/* <img className="w-full" src="./images/logofull.svg"></img>
      <div className="login">
        <div className="login__container">
          <h2>Login</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            repellendus aliquid, repudiandae modi officiis eius. .
          </p>
          <form>
            <input
              className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10 py-3 px-2 leading-tight outline-none"
              type="text"
              placeholder="UserName"
              aria-label="UserName"
              name="UserName"
            />
            <input
              className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10  px-2 leading-tight outline-none"
              type="password"
              placeholder="Password"
              aria-label="Password"
              name="Password"
            />
          </form>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default App;
