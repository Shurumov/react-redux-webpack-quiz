import React from 'react';
import { hot } from 'react-hot-loader';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'config/constants';
// common
const TestPage = loadable(() => import(/* webpackPrefetch: true */ './TestPage'));
const QuestionPage = loadable(() => import(/* webpackPrefetch: true */ './QuestionsPage'));

class Router extends React.PureComponent {
    render() {
        return (
            <Switch>
                {/*Common pages*/}
                <Route exact path={ROUTES.TEST} render={(props) => <TestPage {...props} />} />
                <Route exact path={ROUTES.QUESTIONS} render={(props) => <QuestionPage {...props} />} />
                <Route render={(props) => <TestPage {...props} />} />
            </Switch>
        );
    }
}

export default hot(module)(Router);
