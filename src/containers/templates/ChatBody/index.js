import { Box, Menu } from 'grommet';
import { AppBar } from '../../../components';
import { MoreVertical } from 'grommet-icons';

const ChatBody = ({ showDetailContact }) => {
    return (
        <Box flex align='center'>
            <AppBar>
            <Box />
            <Menu 
                icon={<MoreVertical size='small' />}
                items={[
                    { label: 'Info Contact', onClick: () => {} },
                    { label: 'Delete Message', onClick: () => {} },
                    { label: 'Logout', onClick: () => {} },
                    ]}
                dropBackground='brand'
                size='large'
            />
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
