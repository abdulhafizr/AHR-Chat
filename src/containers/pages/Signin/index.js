import { Grommet, ResponsiveContext } from 'grommet';
import { Mobile, Web } from '../../../components/molecules/SigninForm';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';
import theme from './theme';

const Signin = () => {
    return (
        <Provider store={store}>
            <Grommet theme={theme} full>
                <ResponsiveContext.Consumer>
                    {  (size) => (
                            (size === 'medium' || size === 'large') ? 
                            (
                                <Web />
                            ) :
                            (
                                <Mobile />
                            )
                        )
                    }
                </ResponsiveContext.Consumer>
            </Grommet>
        </Provider>
    )
}

export default Signin;
