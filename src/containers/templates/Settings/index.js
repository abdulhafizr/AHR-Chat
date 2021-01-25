import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { connect } from 'react-redux';
import { AppBar } from '../../../components';
import { FormClose } from 'grommet-icons';

const Settings = ({ size, toggleIsSettingShow }) => {
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
                icon={<FormClose size='small' />} 
                onClick={toggleIsSettingShow}
            ></Button>
            </AppBar>

            <Box flex justify='center'>
                Setting
            </Box>
        </Box>
    )
}

const reduxDispatch = (dispatch) => ({
    toggleIsSettingShow: () => dispatch({type: 'toggleIsSettingShow'})
})

export default connect(null, reduxDispatch) (Settings);
