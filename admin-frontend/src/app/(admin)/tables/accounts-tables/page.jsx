import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AccountProvider } from './context/AccountContext';
import SearchBar from './components/SearchBar';
import AccountDetailTable from './components/AccountDetailTable';
import AccountPagination from './components/AccountPagination';

function App() {
  return (
    <Router>
      <AccountProvider>
        <Switch>
          <Route path="/" exact>
            <SearchBar />
            <AccountDetailTable />
            <AccountPagination />
          </Route>
        </Switch>
      </AccountProvider>
    </Router>
  );
}

export default App;
