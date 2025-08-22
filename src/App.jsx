import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login, CreateCampaigns, AllCampaigns, Campaign, DashboardLayout, Investment } from './AllFiles';
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/DashBoard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
            element: <h1 className='text-center text-[1.8rem] my-[1rem] font-bold'>Welcome home</h1>,
        },
        {
          path: 'createCampaigns',
          element: <CreateCampaigns />,
        },
        {
          path: 'allCampaigns',
          element: <AllCampaigns />,
        },
        {
          path: 'investment',
          element: <Investment />,
        },
        {
          path: 'Campaign/:id',
          element: <Campaign />,
        },
      ],
    },
    {
      path: '*',
      element: <Login />
    },
  ]);

  return (
    <>
      <div>
      <RouterProvider router={router} />

      </div>

    </>
  )
}

export default App
  // <div>
  //     <Router>
  //       <Routes>
  //         <Route path='/' index element={<SideBar />} />
  //        <Route path='/' index element={<Login />} /> 
  //         <Route path='/createCampaigns' element={<CreateCampaigns />} />
  //         <Route path='/allCampaigns' element={<AllCampaigns />} />
  //         <Route path='/Campaign/:id' element={<Campaign />} />
  //       </Routes>
  //     </Router>
  //     </div>
