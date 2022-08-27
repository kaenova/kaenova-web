import React from 'react'
import MainLayout from '../components/layout/main_layout'
import LiveLayout from '../components/pages/live/live_content'
import LiveHeader from '../components/pages/live/live_header'

function Live() {
  return (
    <MainLayout>
      <div className='h-screen flex flex-col'>
        {/* <LiveHeader /> */}
        <LiveLayout/>
      </div>
    </MainLayout>
  )
}

export default Live