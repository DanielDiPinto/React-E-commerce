import Navbar from "../sections/Navbar/Navbar";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
    <Navbar/>
      <div
        className="d-flex flex-column justify-content-center align-items-center vhCustom">
        <h1 className="">404 Not Found</h1>
        <Link className="btn" to={'/'}>Torna alla home</Link>
      </div>
    </>
  );
};
