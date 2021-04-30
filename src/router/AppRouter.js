import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default AppRouter;
