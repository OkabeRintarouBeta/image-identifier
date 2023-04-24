import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import SearchItem from './components/SearchItem/search-item';
import StickyFooter from './footer';

function App() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     minHeight: '100vh',
    //   }}
    // >
    <div className='container'>
      <SearchItem />
      <StickyFooter />
    </div>
      
    // </Box>
  );
}

export default App;
