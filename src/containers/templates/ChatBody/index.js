import { Box, Button } from 'grommet';
import { AppBar } from '../../../components';
import { MoreVertical } from 'grommet-icons';

const ChatBody = ({ showDetailContact }) => {
    return (
        <Box flex align='center'>
            <AppBar>
            <Box />
            <Button 
                size='small' 
                padding='none' 
                icon={<MoreVertical size='small' />} 
                onClick={() => setShowDetailContact(!showDetailContact)}
            ></Button>
            </AppBar>

            <Box flex justify='center' align='center'>
               Chat Body
            </Box>
        </Box>
    )
}

const setShowDetailContact = (showDetailContact) => {
    return !showDetailContact;
}

export default ChatBody;
