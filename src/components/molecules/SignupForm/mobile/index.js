import { Box, Button, Form, FormField, Heading, Text, TextInput } from "grommet";
import { connect } from 'react-redux';
import signupUser from '../../../../config/signupUser';
import { Link } from "react-router-dom";
import { SignFail, SignupSuccess, ValidationError } from "../..";
import { Refresh } from "grommet-icons";

const Mobile = ({ isValidationError, toggleIsValidationError, signupUser, isLoading, isSignup, toggleIsSignup, messageValidationError }) => {
    return (
        <Box flex fill
            align='center' 
            direction='row' 
            background='url(https://images.unsplash.com/photo-1520410973988-f551cf36c60d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' 
            justify='center'
        >   
            <Box width='medium' style={{borderRadius: '6px'}} pad='small' margin={{horizontal: '15px'}} background='brand' elevation='small'>
                <Heading level='2' margin='small' style={{fontWeight: 'normal'}} responsive alignSelf='center'>SIGNUP AHR-Chat</Heading>

                <Form onSubmit={({value}) => signupUser(value)}>
                    
                    {/* <FormField name='name' htmlFor='name-id' label='Name'>
                        <TextInput id='name-id' name='name' placeholder='Name' size='small' required />
                    </FormField> */}
                    <FormField name='email' htmlFor='email-id' label='Email'>
                        <TextInput type='email' id='email-id' name='email' placeholder='Email' size='small' required />
                    </FormField>
                    <FormField name='password' htmlFor='password-id' label='Password'>
                        <TextInput type='password' id='password-id' name='password' placeholder='Password' size='small' required />
                    </FormField>
                    
                    <Box direction='row' margin={{top: '15px'}} justify='center' gap='medium'>
                        <Button type='reset' color='white' label='Reset' />
                        {
                            isLoading ? 
                            (
                                <Button color='white' icon={<Refresh size='small' />} primary disabled label='Loading...' />
                            ) :
                            (
                                <Button color='white' primary type='submit' label='Signup' />
                            )
                        }
                    </Box>
                    <Box margin={{top: '6px'}}>
                        <Text margin='xsmall' size='xsmall'>Already have an account? <Link to='/signin'><Text>Sign</Text></Link></Text>
                    </Box>
                </Form>

            </Box>
            {
                isValidationError && (
                    <ValidationError toggleIsValidationError={toggleIsValidationError} />
                )
            }
            {
                isSignup === 'success' && (
                    <SignupSuccess toggleIsSignup={toggleIsSignup} />
                )
            }
            {
                isSignup === 'failed' && (
                    <SignFail title="Signup Failed" message={messageValidationError} toggleIsSignup={toggleIsSignup} />
                )
            }
        </Box>
    )
}

const reduxState = (state) => ({
    isValidationError: state.isValidationError,
    isLoading: state.isLoading,
    isSignup: state.isSignup,
    messageValidationError: state.messageValidationError,
})
const reduxDispatch = (dispatch) => ({
    toggleIsValidationError: () => dispatch({type: 'toggleIsValidationError'}),
    signupUser: (data) => dispatch(signupUser(data)),
    toggleIsSignup: () => dispatch({type: 'changeIsSignup', value: ''})
})

export default connect(reduxState, reduxDispatch) (Mobile);