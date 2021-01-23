import React, { useState } from 'react';
import { ChatBody, Contacts, DetailContactAndroid, DetailContactWeb, Settings } from '../../templates';
import { Box, Grommet, ResponsiveContext } from "grommet";
import theme from './theme';

const MainApp = () => {
  const [showDetailContact, setShowDetailContact] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        { (size) => (
            <Box fill>

              <Box flex direction='row' overflow={{ horizontal: 'hidden' }}>
                {
                  showSetting && (
                    <Settings />
                  )
                }
                
                {
                  (!showSetting) && (
                    <Contacts />
                  )
                }
                  
                {
                  size !== 'small' && (
                    <ChatBody />
                  )
                }
                
                {
                  (!showDetailContact || size !== 'small') ? 
                    (
                      <DetailContactWeb />
                    ) : (
                      <DetailContactAndroid /> 
                    )
                }
              </Box>

            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default MainApp;
