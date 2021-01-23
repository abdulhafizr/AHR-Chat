import { Box } from 'grommet';

const AppBar = (props) => {
    return (
        <Box
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background='brand'
            pad={{ left:'medium', right:'medium', vertical: 'xsmall'}}
            elevation='small'
            style={{zIndex: '1'}}
            width='100%'
            {...props}
        />
    )
}

export default AppBar;
