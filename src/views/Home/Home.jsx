import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <Link to="/characters">view characters</Link>
    </>
  );
}
