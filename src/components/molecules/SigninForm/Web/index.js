import { Box, Button, Form, FormField, Heading, Text, TextInput } from "grommet";
import { Refresh } from "grommet-icons";
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { SignFail, ValidationError } from "../..";
import signinUser from "../../../../config/signinUser";

const Web = ({ isValidationError, isLoading, isSignin, toggleIsValidationError, signinUser, messageValidationError, toggleIsSignin }) => {
    const history = useHistory();
    const signinNewUser = async (data) => {
        const result = await signinUser(data).catch((error) => error);
        if(result) {
            history.push('/');
        }
    }
    return (
        <Box flex fill
            align='center' 
            direction='row' 
            background='url(https://images.unsplash.com/photo-1520410973988-f551cf36c60d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' 
            justify='around'
        >
            <Box width='large' />
            
            <Box width={{min: '420px', max: '450px'}} style={{borderRadius: '6px'}} pad='small' background='brand' elevation='small'>
                <Heading level='4' margin='small' responsive alignSelf='center'>SIGNIN AHR-Chat</Heading>

                <Form onSubmit={({value}) => signinNewUser(value)}>
                    <FormField name='email' htmlFor='email-id' label='Email'>
                        <TextInput type='email' id='email-id' name='email' placeholder='Email' size='small' required />
                    </FormField>
                    <FormField name='password' htmlFor='password-id' label='Password'>
                        <TextInput type='password' id='password-id' name='password' placeholder='Password' size='small' required />
                    </FormField>
                    
                    <Box direction='row' gap='small'>
                        <Button type='reset' color='white' label='Reset' />
                        {
                            isLoading ? 
                            (
                                <Button color='white' icon={<Refresh size='small' />} primary disabled label='Loading...' />
                            ) :
                            (
                                <Button color='white' primary type='submit' label='Signin' />
                            )
                        }
                    </Box>
                    <Box margin={{top: '6px'}}>
                        <Text margin='xsmall' size='xsmall'>Dont have an account? <Link to='/signup'>Signup</Link></Text>
                    </Box>
                </Form>
            </Box>
            {
                isSignin === 'failed' && (
                    <SignFail toggleNotif={toggleIsSignin} title='Signin Failed' message={messageValidationError} />
                )
            }
            {
                isValidationError && (
                    <ValidationError toggleIsValidationError={toggleIsValidationError} />
                )
            }
        </Box>
    )
}

const reduxState = (state) => ({
    isValidationError: state.isValidationError,
    isLoading: state.isLoading,
    isSignin: state.isSingin,
    messageValidationError: state.messageValidationError,
})
const reduxDispatch = (dispatch) => ({
    toggleIsValidationError: () => dispatch({type: 'toggleIsValidationError'}),
    signinUser: (data) => dispatch(signinUser(data)),
    toggleIsSignin: () => dispatch({type: 'changeIsSignin', value: ''})
})

export default connect(reduxState, reduxDispatch) (Web);
