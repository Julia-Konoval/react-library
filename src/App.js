import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import BookForm from './BookForm';
import { BookProvider } from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/form" component={BookForm} />
        </Switch>
      </BookProvider>
    </div>
  );
}

export default App;
