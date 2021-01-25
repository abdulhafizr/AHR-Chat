import { Box, Layer, Text } from "grommet";

const ValidationError = ({ toggleIsValidationError }) => {
    return (
        <Layer full 
            margin={{top: '120px', right: '120px', bottom: '120px', left: '120px'}}
            onEsc={toggleIsValidationError}
            onClickOutside={toggleIsValidationError}
        >
            <Box fill justify='center' align='center' size='large' background='light-2'>
                <Text>Validation Error</Text>
            </Box>
        </Layer>
    )
}

export default ValidationError;