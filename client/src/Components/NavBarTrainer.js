// import { Link } from "react-router-dom"

// export default function NavBarMember({ member }) {
//     return (
//         <ul>
//             <li><Link to='/exercises'>My Exercises</Link></li>
//             <li><Link to='/classes'>My Classes</Link></li>
//             <li><Link to='/home'>Home</Link></li>
//         </ul>
//     )
// }
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
    let history = useHistory()

    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
                history.push(props.href)
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
                <LinkTab label="Home" href="/home" />
                <LinkTab label="Exercises" href="/exercises" />
                <LinkTab label="Classes" href="/classes" />
            </Tabs>
        </Box>
    );
}
