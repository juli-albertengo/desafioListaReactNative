/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles';

import StartGameScreen  from './screens/start-game-screen';
import GameScreen  from './screens/game-screen';

const App = () => {

  const [gameStatus, setGameStatus] = useState('')
  const [userChoice, setUserChoice] = useState('');

  let content = <StartGameScreen gameStatus={setGameStatus} userChoice={setUserChoice}/>;

  if (gameStatus === 'GameON'){
    content = <GameScreen userChoice={userChoice} gameStatus={setGameStatus}/>;
  }

  return (
    <SafeAreaView styles={styles.container}>
      {content}
    </SafeAreaView>
  );
};



export default App;
