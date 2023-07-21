import "./Homepage.scss";

const headlineOne = "FULL";
const headlineTwo = "STACK";
const headlineThree = "DEVELOPER";

function Homepage() {
  return (
    <>
      <div className="headline">
        {headlineOne.split("").map((h) => {
          return <span>{h}</span>;
        })}
      </div>
      <div className="headline">
        {headlineTwo.split("").map((h) => {
          return <span>{h}</span>;
        })}
      </div>
      <div className="headline">
        {headlineThree.split("").map((h) => {
          return <span>{h}</span>;
        })}
      </div>
    </>
  );
}

export default Homepage;
