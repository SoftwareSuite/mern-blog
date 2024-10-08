import {Sidebar} from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';


export default function DashSidebar() {
    const location = useLocation();
const [tab, setTab] = useState('');
useEffect(() =>{
  const urlParams = new URLSearchParams(location.search);
  const tabFromUrl = urlParams.get('tab');
  if(tabFromUrl) {
    setTab(tabFromUrl);
  }
},[location.search])
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} lablecolor="dark" as="div">
                    Profile
                </Sidebar.Item>
                </Link>
                <Sidebar.Item  icon={HiArrowSmRight} className="cursor-pointer">
                    Sign out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
