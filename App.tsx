import Router from './src/navigators/Router';
import {PaperProvider} from 'react-native-paper';

import useApptheme from './src/hooks/theme/useApptheme';

function App(): JSX.Element {
  const {paperTheme} = useApptheme();

  return (
    <PaperProvider theme={paperTheme}>
      <Router />
    </PaperProvider>
  );
}

export default App;
