import { Box, Button, Layer, Text } from "grommet"
import { Close } from "grommet-icons";

const SignupFail = ({ toggleIsSignup }) => {
    return (
        <Layer full 
            margin={{top: '120px', right: '120px', bottom: '120px', left: '120px'}}
            onEsc={toggleIsSignup}
            onClickOutside={toggleIsSignup}
        >
            <Box fill justify='around' align='center' background='brand'>
                <Text size='xlarge'>Signup Failed</Text>
                <Box direction='row' align='center' gap='medium'>
                    <Close size='xlarge' />
                    <Text>Sorry, Account has been Failed to Registered</Text>
                </Box>
                <Button secondary onClick={toggleIsSignup} color='white' white label='Back' />
            </Box>
        </Layer>
    )
}

export default SignupFail;
