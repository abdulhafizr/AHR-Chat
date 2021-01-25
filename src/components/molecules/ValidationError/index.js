import { Box, Button, Layer, Text } from "grommet";
import { Close } from "grommet-icons";

const ValidationError = ({ toggleIsValidationError }) => {
    return (
        <Layer full 
            margin={{top: '120px', right: '120px', bottom: '120px', left: '120px'}}
            onEsc={toggleIsValidationError}
            onClickOutside={toggleIsValidationError}
        >
            <Box fill justify='around' align='center' size='large' background='brand'>
                <Text>Validation Error</Text>
                    <Box direction='row' align='center' gap='medium'>
                        <Close size='xlarge' />
                        <Text>Password Must be Greater than 6 Character</Text>
                    </Box>
                <Button secondary color='white' onClick={toggleIsValidationError} label='Back' />
            </Box>
        </Layer>
    )
}

export default ValidationError;