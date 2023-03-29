import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Route, Router, Routes } from 'react-router-dom';

import './App.css';
import SliderIn from './components/wrapper/Slider';
import Cards from './components/video cards/Cards';
import History from './components/history/History';
import Menu from './components/home/Menu';

function App() {

  return (
    <>
      <div>
        <Menu/>
        <Routes>
          <Route path={"/"} element={<Cards/>}/>
          <Route path={"/history"} element={<History/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
