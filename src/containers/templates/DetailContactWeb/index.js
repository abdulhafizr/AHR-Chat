import { Box, Button, Collapsible } from 'grommet';
import { AppBar } from '../../../components';
import { FormClose } from 'grommet-icons';

const DetailContactWeb = ({ showDetailContact }) => {
    return (
        <Collapsible direction='horizontal' open={showDetailContact}>
            <Box
                flex
                width='medium'
                background='light-2'
                align='center'
            >
            <AppBar>
                <Button 
                    size='small' 
                    padding='none' 
                    icon={<FormClose size='small' />} 
                    onClick={() => setShowDetailContact(!showDetailContact)}
                ></Button>
            </AppBar>
                <Box flex justify='center'>
                    Detail
                </Box>
            </Box>
        </Collapsible>
    )
}

const setShowDetailContact = (setShowDetailContact) => {
    return !setShowDetailContact;
}

export default DetailContactWeb;
