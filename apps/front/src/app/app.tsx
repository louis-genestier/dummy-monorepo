import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Courier New';
`;

export function App() {
  const { data: sentence } = useQuery({
    queryKey: ['sentence'],
    queryFn: async () => {
      console.log('api url', import.meta.env.VITE_API_URL);
      const { data } = await axios.get<{ random: string }>(
        `${import.meta.env.VITE_API_URL}/random`
      );
      return data.random;
    },
  });

  return <StyledDiv>{sentence}</StyledDiv>;
}

export default App;
