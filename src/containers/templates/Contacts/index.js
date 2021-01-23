import { Box, Button, Heading } from 'grommet';
import { AppBar } from '../../../components';
import { MoreVertical } from 'grommet-icons';


const Contacts = ({ showSetting, size }) => {
    return (
        <Box
            width={size === 'small' ? 'full' : 'medium'}
            background='light-2'
            align='center'
        >
            <AppBar>
            <Heading level='4' margin='none'>AHR-Chat</Heading>
            <Button 
                size='small' 
                padding='none' 
                icon={<MoreVertical size='small' />} 
                onClick={() => setShowSetting(!showSetting)}
            ></Button>
            </AppBar>
            
            <Box flex justify='center'>
                Contact
            </Box>
        </Box>
    )
}

const setShowSetting = () => {
    return !showSetting;
}

export default Contacts;
