import { Box, Button, Layer } from "grommet";
import { AppBar } from "../../../components";
import { FormClose } from 'grommet-icons';

const DetailContactAndroid = ({ showDetailContact }) => {
    return (
        <Layer>
            <Box
                fill
                background='light-2'
            >
            <AppBar>
                <Button 
                    size='small' 
                    padding='none' 
                    icon={<FormClose size='medium' />} 
                    onClick={() => setShowDetailContact(!showDetailContact)}
                ></Button>
            </AppBar>
                <Box flex justify='center' align='center'>
                    Detail
                </Box>
            </Box>
        </Layer>
    )
}

const setShowDetailContact = (setShowDetailContact) => {
    return !setShowDetailContact;
}

export default DetailContactAndroid;
