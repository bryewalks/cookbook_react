import React from 'react';
import { Route,
          BrowserRouter as Router,
          Switch 
        } from 'react-router-dom';
import RecipesIndex from 'views/RecipesIndex';
import RecipesShow from 'views/RecipesShow';
import RecipesNew from 'views/RecipesNew';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={RecipesIndex} />
          <Route path='/recipes/new' component={RecipesNew} />
          <Route exact path='/recipes/:id' component={RecipesShow} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes