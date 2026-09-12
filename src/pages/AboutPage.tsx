import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main>
      <h1>About</h1>
      <p>About this movie application.</p>

      <Link to="/">Home</Link>
    </main>
  );
};

export default AboutPage;