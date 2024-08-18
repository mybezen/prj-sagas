import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Box } from '@mui/material';

export default function IconLabelTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange =(event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<PhoneIcon />} label="RECENTS" />
            <Tab icon={<FavoriteIcon />} label="FAVORITES" />
            <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>

        {value === 0 && <Box p={3}>This is the content for the RECENTS tab.</Box>}
        {value === 1 && <Box p={3}>This is the content for the FAVORITES tab.</Box>}
        {value === 2 && <Box p={3}>This is the content for the NEARBY tab.</Box>}
    </Box>
    );
}
