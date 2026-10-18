 
 

 
import React from 'react';
import { Outlet } from "react-router-dom";
 

function Dashboard(){
    return(
        <div className="dashboard-layout-wrapper" style={{ padding: '20px' }}>
            <h2>Dashboard Panel</h2>
            
            {/* 🌟 The Outlet dynamically swaps between DashboardOverview and the Detail Pages! */}
            <div className="dashboard-content-pane">
                <Outlet />
            </div>

            
            
        </div>
    )
}

 

 
           

export default Dashboard;