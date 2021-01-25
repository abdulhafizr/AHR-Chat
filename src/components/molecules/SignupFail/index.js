import { Box, Layer, Text } from "grommet"

const SignupFail = ({ toggleIsSignup }) => {
    return (
        <Layer full 
            margin={{top: '120px', right: '120px', bottom: '120px', left: '120px'}}
            onEsc={toggleIsSignup}
            onClickOutside={toggleIsSignup}
        >
            <Box fill justify='center' align='center' size='large' background='light-2'>
                <Text>Signup Failed!</Text>
            </Box>
        </Layer>
    )
}

export default SignupFail;
