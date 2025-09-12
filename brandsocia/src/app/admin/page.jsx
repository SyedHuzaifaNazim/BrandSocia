"use client"
import React, { useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { FaChartBar } from 'react-icons/fa'
import { FaFileAlt } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'
import Footer from '@/components/layout/Footer'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaChartBar /> },
    { id: 'users', label: 'Users', icon: <FaUsers /> },
    { id: 'content', label: 'Content', icon: <FaFileAlt /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> }
  ]

  return (
    <>
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <Header />
    <div className='h-25'></div>
    <div className="flex min-h-screen bg-transparent">
      {/* Sidebar */}
      <div className="w-64 bg-transparent shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          {menuItems.map(item => (
            <Link
              key={item.id}
              href="#"
              className={`flex items-center px-6 py-4 ${
                activeTab === item.id 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="mr-4">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Total Users</h3>
            <p className="text-3xl font-bold text-gray-800">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Active Posts</h3>
            <p className="text-3xl font-bold text-gray-800">567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <p className="text-3xl font-bold text-gray-800">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Growth</h3>
            <p className="text-3xl font-bold text-green-500">+25%</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            <div className="mt-4">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-4">User</th>
                    <th className="pb-4">Action</th>
                    <th className="pb-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-4">John Doe</td>
                    <td className="py-4">Created new post</td>
                    <td className="py-4">2024-03-20</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4">Jane Smith</td>
                    <td className="py-4">Updated profile</td>
                    <td className="py-4">2024-03-19</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AdminPanel
