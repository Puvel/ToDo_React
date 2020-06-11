import { useSelector } from 'react-redux';
import { useRoute } from './router';

function App() {
  const token = useSelector(state => state.token);
  const routing = useRoute(token);
  return routing;
}

export default App;
