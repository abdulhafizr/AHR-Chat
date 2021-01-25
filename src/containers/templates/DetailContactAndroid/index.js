import { Box, Button, Layer } from "grommet";
import { AppBar } from "../../../components";
import { FormClose } from 'grommet-icons';
import { connect } from 'react-redux';

const DetailContactAndroid = ({ toggleIsDetailShow }) => {
    return (
        <Layer>
            <Box
                fill
                background='light-2'
            >
            <AppBar>
                <Button 
                    size='small' 
                    padding='none' 
                    icon={<FormClose size='medium' />} 
                    onClick={toggleIsDetailShow}
                ></Button>
            </AppBar>
                <Box flex justify='center' align='center'>
                    Detail
                </Box>
            </Box>
        </Layer>
    )
}

const reduxDispatch = (dispatch) => ({
    toggleIsDetailShow: () => dispatch({type: 'toggleIsDetailShow'})
})

export default connect(null, reduxDispatch) (DetailContactAndroid);
