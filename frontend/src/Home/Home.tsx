import { Button, IconButton } from '@mui/material';
import './Home.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Home() {

  
  


  return (
    <div className='home'>

        <div className="nav">
            <Button disableRipple={true} href="/movies"><h4 style={{color:"#D46268"}}>Movies</h4></Button> | <Button href='#documentation' disableRipple={true}><h4 style={{color: "#9447B3"}}>Documentation</h4></Button>
        </div>

        <div className="title">
            Welcome to <span className='colorTitle'>M165</span>
            <div className='title2'>
            <span className='invisible'>Welcome to  </span> NoSQL databases
            </div>
        </div>
      
        <div className="explore">
            <span>Explore</span>
            <br />
            <IconButton size='medium' href='#documentation'>
                <KeyboardArrowDownIcon fontSize='large' />
            </IconButton>
        </div>

          
        </div>
  );
}

