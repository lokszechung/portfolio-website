
import "./Homepage.scss";
import Header from "../components/Header"


export default function Homepage() {

  return (
    <>
      <div className="info">
        <span className="name">Lok Sze<br />Chung</span>
      </div>
      <div className="hero">
        <div className="hero-title-top">
          <Header heading={'full  —  stack'} />
          {/* <Header heading={'stack'} /> */}
        </div>
        <div className="hero-title-bottom">
          <Header heading={'developer'}/>
        </div>
      </div>
      
      <div className="nav">
        {/* <Header heading={'developer'} /> */}
      </div>
    </>
  );
}

