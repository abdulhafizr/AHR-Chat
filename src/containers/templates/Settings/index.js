import React, { useState } from 'react';
import { Box, Button, Heading } from 'grommet';
import { AppBar } from '../../../components';
import { MoreVertical } from 'grommet-icons';

const Settings = ({ setShowSetting, size, show }) => {
    const [isShow, setIsShow] = useState(show);
    const setSettingsDisplay = () => {
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
            <Heading level='4' margin='none'>Setting</Heading>
            <Button 
                size='small' 
                padding='none' 
                icon={<MoreVertical size='small' />} 
                onClick={() => setShowSetting(setSettingsDisplay())}
            ></Button>
            </AppBar>

            <Box flex justify='center'>
                Setting
            </Box>
        </Box>
    )
}

export default Settings;
