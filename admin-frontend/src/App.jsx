                                                                                        import AppProvidersWrapper from './components/wrappers/AppProvidersWrapper';
import AppRouter from './routes/router';
import configureFakeBackend from './helpers/fake-backend';
import '@/assets/scss/app.scss';
import '@/assets/scss/icons.scss';
configureFakeBackend();
function App() {
  return <AppProvidersWrapper>
      <AppRouter />
    </AppProvidersWrapper>;
}
export default App;