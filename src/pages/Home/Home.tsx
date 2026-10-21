import "./Home.css";
import homeImage from "../../assets/example-image1.jpg";

function Home() {
  return (
    <div className="home-content">
      <div>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          nec elit eu interdum. Quisque nec accumsan magna. Curabitur porttitor
          iaculis turpis, non tempus sem bibendum sed. Aenean mauris neque,
          pulvinar ut viverra vel, vulputate nec nisi. Cras iaculis arcu ut
          metus finibus, eget fermentum libero malesuada. Maecenas rhoncus
          ultrices scelerisque. Aliquam congue libero ante, a pellentesque neque
          mattis nec. 
        </p>
      </div>
      <div className="container-image">
        <img className="home-image" src={homeImage} alt="Home-image" />
      </div>
    </div>
  );
}

export default Home;
