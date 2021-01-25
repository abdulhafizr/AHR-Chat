import { Box, Button, Collapsible } from 'grommet';
import { AppBar } from '../../../components';
import { FormClose } from 'grommet-icons';
import { connect } from 'react-redux';

const DetailContactWeb = ({ isDetailShow, toggleIsDetailShow }) => {
    return (
        <Collapsible direction='horizontal' open={isDetailShow}>
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
                    onClick={toggleIsDetailShow}
                ></Button>
            </AppBar>
                <Box flex justify='center'>
                    Detail
                </Box>
            </Box>
        </Collapsible>
    )
}

const reduxState = (state) => ({
    isDetailShow: state.isDetailShow
})
const reduxDispatch = (dispatch) => ({
    toggleIsDetailShow: () => dispatch({type: 'toggleIsDetailShow'})
})


export default connect(reduxState, reduxDispatch) (DetailContactWeb);
