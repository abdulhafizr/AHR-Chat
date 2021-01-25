import { Box, Button, Layer, Text } from "grommet"
import { Close } from "grommet-icons";

const SignupFail = ({ toggleIsSignup, message }) => {
    return (
        <Layer full 
            margin={{top: '120px', right: '240px', bottom: '120px', left: '240px'}}
            onEsc={toggleIsSignup}
            onClickOutside={toggleIsSignup}
        >
            <Box fill justify='around' align='center' background='brand'>
                <Text size='xlarge'>Signup Failed</Text>
                <Box direction='row' align='center' gap='medium'>
                    <Close size='xlarge' />
                    <Text>{message}</Text>
                </Box>
                <Button secondary onClick={toggleIsSignup} color='white' white label='Back' />
            </Box>
        </Layer>
    )
}

export default SignupFail;
