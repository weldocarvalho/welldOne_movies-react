import { useHomeFetch } from '../hooks/useHomeFetch';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return <h1>home</h1>;
};

export default Home;
