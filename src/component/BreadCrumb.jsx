import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';


export default function BreadCrumb() {
    return (
        <div role="presentation" >
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/DashBoard/allCampaigns">All Campaigns</Link>
                <Typography sx={{ color: 'blue' }}>Campaign detail</Typography>
            </Breadcrumbs>
        </div>
    );
}
