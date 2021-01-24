import { Box, Button, Form, FormField, Heading, Text, TextInput } from "grommet"
import { Link } from "react-router-dom";

const Web = ({ signupUser }) => {
    return (
        <Box flex fill
            align='center' 
            direction='row' 
            background='url(https://images.unsplash.com/photo-1520410973988-f551cf36c60d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' 
            justify='around'
        >
            <Box width='large' />
            
            <Box width={{min: '420px', max: '450px'}} style={{borderRadius: '6px'}} pad='small' background='brand' elevation='small'>
                <Heading level='4' margin='small' responsive alignSelf='center'>SIGNUP</Heading>

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
                    
                    <Box direction='row' gap='small'>
                        <Button type='reset' color='white' label='Reset' />
                        <Button color='white' primary type='submit' label='Signup' />
                    </Box>
                    <Box margin={{top: '6px'}}>
                        <Text margin='xsmall' size='xsmall'>Already have an account? <Link to='/signin'>Signin</Link></Text>
                    </Box>
                </Form>

            </Box>
        </Box>
    )
}

export default Web;