import Router from './src/navigators/Router';
import {PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import useApptheme from './src/hooks/theme/useApptheme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App(): JSX.Element {
  const {paperTheme} = useApptheme();

  return (
    <PaperProvider theme={paperTheme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;
