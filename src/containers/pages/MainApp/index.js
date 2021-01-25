import React from 'react';
import { ChatBody, Contacts, DetailContactAndroid, DetailContactWeb, Settings } from '../../templates';
import { Provider } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { store } from '../../../config/redux';
import { Box, Grommet, ResponsiveContext } from "grommet";
import { connect } from 'react-redux';
import theme from './theme';

const MainApp = ({ isSettingShow, isDetailShow, isSignin }) => {
  const history = useHistory();
  (isSignin === 'not-signin') && (
    history.push('/signin')
  )
  return (
    <Provider store={store}>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          { (size) => (
              <Box fill>

                <Box flex direction='row' overflow={{ horizontal: 'hidden' }}>
                  {
                    isSettingShow && 
                    (
                      <Settings size={size} />
                    )
                  }
                  
                  {
                    (!isSettingShow) && 
                    (
                      <Contacts size={size} />
                    )
                  }
                    
                  {
                    size !== 'small' && (
                      <ChatBody />
                    )
                  }

                  <DetailContactWeb size={size} />

                  {
                    isDetailShow && (
                      <DetailContactAndroid size={size} /> 
                    )
                  }

                </Box>

              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Grommet>
    </Provider>
  );
}

const reduxState = (state) => ({
  isSignin: state.isSignin,
  user: state.user,
  isSettingShow: state.isSettingShow,
  isDetailShow: state.isDetailShow,
})

export default connect(reduxState, null) (MainApp);
