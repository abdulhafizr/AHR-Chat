import React, { useState } from 'react';
import { Avatar, Box, Menu } from 'grommet';
import { AppBar } from '../../../components';
import { MoreVertical } from 'grommet-icons';

const Contacts = ({ setShowSetting, size, show }) => {
    const [isShow, setIsShow] = useState(show)
    const setContactDisplay = () => {
        setIsShow(!isShow);
        return isShow;
    }

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
                        { label: 'Setting', onClick: () => {} },
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

export default Contacts;
