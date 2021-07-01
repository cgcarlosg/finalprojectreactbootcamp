import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Articles/>
      <ScoredArticles/>
    
    </div>
    </Provider>
  );
}

export default App;
