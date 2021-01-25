import { Box, Button, Form, FormField, Heading, Text, TextInput } from "grommet";
import { Link } from "react-router-dom";

const Mobile = () => {
    return (
        <Box flex fill
            align='center' 
            direction='row' 
            background='url(https://images.unsplash.com/photo-1520410973988-f551cf36c60d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' 
            justify='center'
        >   
            <Box width='medium' style={{borderRadius: '6px'}} pad='small' margin={{horizontal: '15px'}} background='brand' elevation='small'>
                <Heading level='2' margin='small' style={{fontWeight: 'normal'}} responsive alignSelf='center'>SIGNIN AHR-Chat
</Heading>

                <Form onSubmit={({value}) => {console.log(value)}}>
                    
                    <FormField name='email' htmlFor='email-id' label='Email'>
                        <TextInput type='email' id='email-id' name='email' placeholder='Email' size='small' required />
                    </FormField>
                    <FormField name='password' htmlFor='password-id' label='Password'>
                        <TextInput type='password' id='password-id' name='password' placeholder='Password' size='small' required />
                    </FormField>
                    
                    <Box direction='row' margin={{top: '15px'}} justify='center' gap='medium'>
                        <Button type='reset' color='white' label='Reset' />
                        <Button color='white' primary type='submit' label='Signin' />
                    </Box>
                    <Box margin={{top: '6px'}}>
                        <Text margin='xsmall' size='xsmall'>Dont have an account? <Link to='/signup'>Signu</Link></Text>
                    </Box>
                </Form>

            </Box>
        </Box>
    )
}

export default Mobile;
