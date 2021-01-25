import { Box, Button, Layer, Text } from "grommet"
import { StatusGood } from "grommet-icons"

const SignupSuccess = ({ toggleIsSignup }) => {
    return (
        <Layer full 
            margin={{top: '120px', right: '120px', bottom: '120px', left: '120px'}}
            onEsc={toggleIsSignup}
            onClickOutside={toggleIsSignup}
        >
            <Box fill justify='around' align='center' background='brand'>
                <Text size='xlarge'>Signup Success</Text>
                <Box direction='row' align='center' gap='medium'>
                    <StatusGood size='xlarge' />
                    <Text>Congratulations, Account has been Successfully Registered</Text>
                </Box>
                <Button secondary onClick={toggleIsSignup} color='white' white label='Back' />
            </Box>
        </Layer>
    )
}

export default SignupSuccess;
