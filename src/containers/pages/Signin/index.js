import { Grommet, ResponsiveContext } from 'grommet';
import { Mobile, Web } from '../../../components/molecules/SigninForm';
import theme from './theme';

const Signin = () => {
    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {  (size) => (
                        (size === 'medium' || size === 'large') ? (
                            <Web />
                        ) :
                        (
                            <Mobile />
                        )
                    )
                }
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default Signin;
