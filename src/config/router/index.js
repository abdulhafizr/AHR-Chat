import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Signin, Signup, MainApp } from '../../containers';

const router = () => {
    return (
        <Router>
            <Route exact path='/'>
                <MainApp />
            </Route>
            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/signin'>
                <Signin />
            </Route>
        </Router>
    )
}

export default router;