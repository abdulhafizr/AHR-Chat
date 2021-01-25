import React from 'react';
import { Avatar, Box, Menu } from 'grommet';
import { AppBar } from '../../../components';
import { MoreVertical } from 'grommet-icons';
import { connect } from 'react-redux';

const Contacts = ({ toggleIsSettingShow, size }) => {
    return (
        <Box
            width={size === 'small' ? 'full' : 'medium'}
            background='light-2'
            align='center'
        >
            <AppBar>
                <Avatar 
                    size='40px' 
                    src='//s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80' 
                />

                <Menu 
                    size='large'
                    icon={<MoreVertical size='small' />}
                    items={[
                        { label: 'Profile', onClick: () => {} },
                        { label: 'Setting', onClick: toggleIsSettingShow },
                        { label: 'Logout', onClick: () => {} },
                      ]}
                    dropBackground='brand'
                />
            </AppBar>
            
            <Box flex justify='center'>
                Contact
            </Box>
        </Box>
    )
}

const reduxDispatch = (dispatch) => ({
    toggleIsSettingShow: () => dispatch({type: 'toggleIsSettingShow'})
})

export default connect(null, reduxDispatch) (Contacts);
