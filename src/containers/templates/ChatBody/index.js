import { Box, Menu } from 'grommet';
import { AppBar } from '../../../components';
import { MoreVertical } from 'grommet-icons';
import { connect } from 'react-redux';

const ChatBody = ({ toggleIsDetailShow }) => {
    return (
        <Box flex align='center'>
            <AppBar>
            <Box />
            <Menu 
                icon={<MoreVertical size='small' />}
                items={[
                    { label: 'Info Contact', onClick: toggleIsDetailShow },
                    { label: 'Delete Message', onClick: () => {alert('Cokk')} },
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

const reduxDispatch = (dispatch) => ({
    toggleIsDetailShow: () => dispatch({type: 'toggleIsDetailShow'})
})

export default connect(null, reduxDispatch) (ChatBody);
