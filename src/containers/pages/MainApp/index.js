import React from 'react';
import { ChatBody, Contacts, DetailContactAndroid, DetailContactWeb, Settings } from '../../templates';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';
import { Box, Grommet, ResponsiveContext } from "grommet";
import { connect } from 'react-redux';
import theme from './theme';

const MainApp = ({ isSettingShow, isDetailShow }) => {
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
                  
                  {
                    isDetailShow && 
                    (
                      size !== 'small' ? 
                      (
                        <DetailContactWeb />
                      ) :
                      (
                        <DetailContactAndroid /> 
                      )
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
  isSettingShow: state.isSettingShow,
  isDetailShow: state.isDetailShow,
})

export default connect(reduxState, null) (MainApp);
