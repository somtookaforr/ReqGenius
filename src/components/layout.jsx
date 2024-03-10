import React from 'react'
import SideBar from './sidebar'

const Layout = ({ children }) => {
    return (
        <div className="lg:grid lg:grid-cols-12">
            <div className="col-span-3 overflow-y-hidden">
                <SideBar />
            </div>

            <main className="col-span-9 overflow-y-auto h-screen">
                <div className="my-12 lg:px-10 px-6">
                    {/* Render children within the main content */}
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
