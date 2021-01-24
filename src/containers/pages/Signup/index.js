import { Grommet, ResponsiveContext } from 'grommet';
import { Mobile, Web } from '../../../components/molecules/SignupForm';
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


const signupUser = (value) => {
    console.log(value);
}

export default Signup;
