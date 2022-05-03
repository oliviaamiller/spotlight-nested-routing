import { Route, Switch } from 'react-router-dom';
import CharacterList from './views/Characters/List';
import Home from './views/Home/Home';

export default function App() {
  return (
    <>
    <h1>Rick and Morty Characters</h1>
      <Switch>
        <Route path="/characters/">
          <CharacterList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
