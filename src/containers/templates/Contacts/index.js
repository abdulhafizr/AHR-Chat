import React, { useState } from 'react';
import { Box, Button, Heading } from 'grommet';
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
                <Heading level='4' margin='none'>AHR-Chat</Heading>
                <Button 
                    size='small' 
                    padding='none' 
                    icon={<MoreVertical size='small' />} 
                    onClick={() => setShowSetting(setContactDisplay())}
                ></Button>
            </AppBar>
            
            <Box flex justify='center'>
                Contact
            </Box>
        </Box>
    )
}

export default Contacts;
