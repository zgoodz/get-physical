// import { Link } from "react-router-dom"

// export default function NavBarMember() {
//     return(

//         <ul>
//             <li><Link to='/home'>Home</Link></li>
//             <li><Link to='/routine'>My Routine</Link></li>
//             <li><Link to='/exercises'>Exercises</Link></li>
//             <li><Link to='/classes'>Upcoming Classes</Link></li>
//         </ul>
//     )
// }
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavBarMember() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="Home" to="/home" />
                <LinkTab label="Routine" to="/routine" />
                <LinkTab label="Exercises" to="/exercises" />
                <LinkTab label="Classes" to="/classes" />
            </Tabs>
        </Box>
    );
}
