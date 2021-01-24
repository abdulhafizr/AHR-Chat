import { Grommet, ResponsiveContext } from 'grommet';
import { Mobile, Web } from '../../../components/molecules/SignupForm';
import signupUser from '../../../config/signupUser';
import theme from './theme';

const Signup = () => {
    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {  (size) => (
                        (size === 'medium' || size === 'large') ? 
                        (
                            <Web signupUser={(value) => signupUser(value)} />
                        ) :
                        (
                            <Mobile signupUser={(value) => signupUser(value)} />
                        )
                    )
                }
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default Signup;
