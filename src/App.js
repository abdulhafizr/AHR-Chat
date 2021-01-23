import React, { useState } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from "grommet";
import { MoreVertical, FormClose } from 'grommet-icons';

function App() {
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
                          onClick={() => setShowSetting(!showSetting)}
                        ></Button>
                      </AppBar>

                      <Box flex justify='center'>
                        Setting
                      </Box>
                    </Box>
                  )
                }
                
                {
                  (!showSetting) && (
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
                          onClick={() => setShowSetting(!showSetting)}
                        ></Button>
                      </AppBar>
                      
                      <Box flex justify='center'>
                        Contact
                      </Box>
                    </Box>
                  )
                }
                  
                {
                  size !== 'small' && (
                    <Box flex align='center'>
                      <AppBar>
                        <Box />
                        <Button 
                          size='small' 
                          padding='none' 
                          icon={<MoreVertical size='small' />} 
                          onClick={() => setShowDetailContact(!showDetailContact)}
                        ></Button>
                      </AppBar>

                      <Box flex justify='center' align='center'>
                        Chat Body
                      </Box>
                    </Box>
                  )
                }
                
                {
                  (!showDetailContact || size !== 'small') ? (
                    <Collapsible direction='horizontal' open={showDetailContact}>
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
                            onClick={() => setShowDetailContact(!showDetailContact)}
                          ></Button>
                        </AppBar>
                        
                        <Box flex justify='center'>
                          Detail
                        </Box>
                      </Box>
                    </Collapsible> 
                  ) : (
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
                            onClick={() => setShowDetailContact(!showDetailContact)}
                          ></Button>
                        </AppBar>
                        <Box flex justify='center' align='center'>
                          Detail
                        </Box>
                      </Box>
                    </Layer>
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

const AppBar = (props) => (
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

const theme = {
  global: {
    colors: {
      // brand: '#051923'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  icon: {
      size: {
        small: '18px'
      }
    }
};

export default App;
