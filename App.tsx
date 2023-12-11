import Router from './src/navigators/Router';
import {PaperProvider} from 'react-native-paper';

import useScheme from './src/hooks/theme/useScheme';

function App(): JSX.Element {
  const {paperTheme} = useScheme();

  return (
    <PaperProvider theme={paperTheme}>
      <Router />
    </PaperProvider>
  );
}

export default App;
