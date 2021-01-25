import { Box, Button, Layer, Text } from "grommet"
import { Close } from "grommet-icons";

const SignFail = ({ toggleNotif, message, title }) => {
    return (
        <Layer full 
            margin={{top: '120px', right: '240px', bottom: '120px', left: '240px'}}
            onEsc={toggleNotif}
            onClickOutside={toggleNotif}
        >
            <Box fill justify='around' align='center' background='brand'>
                <Text size='xlarge'>{title}</Text>
                <Box direction='row' align='center' gap='medium'>
                    <Close size='xlarge' />
                    <Text>{message}</Text>
                </Box>
                <Button secondary onClick={toggleNotif} color='white' white label='Back' />
            </Box>
        </Layer>
    )
}

export default SignFail;
