import { useHomeFetch } from '../hooks/useHomeFetch';
import HeroSection from './HeroSection';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config/apiConfig';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroSection
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </>
  );
};

export default Home;
