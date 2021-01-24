import { Grommet, ResponsiveContext } from 'grommet';
import { Mobile, Web } from '../../../components/molecules/SigninForm';
import { connect } from 'react-redux';
import theme from './theme';

const Signin = (props) => {
    return (
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
    )
}

const dispatchStateToProps = (state) => ({
    isValidationError: state.isValidationError
})

export default connect(dispatchStateToProps, null) (Signin);
