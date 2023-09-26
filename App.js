import 'react-native-gesture-handler';
import AppNavContainer from './src/navigation';
import { GlobalProvider } from './src/context/provider';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
}

