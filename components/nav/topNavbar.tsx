import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar, Link, Button } from '@nextui-org/react';
import { FiMenu } from 'react-icons/fi'; // For the menu icon, you can use react-icons
import Image from 'next/image';

const TopNavbar: React.FC = () => {
  return (
    <Navbar className="fixed top-0 w-full z-50 bg-white shadow-md">
      <NavbarContent justify="start">
        <NavbarItem>
          <Avatar 
            src="/path-to-profile-pic.jpg" 
            size="md" 
            alt="User Profile" 
            as={Link} 
            href="/profile"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarBrand className="flex justify-center w-full">
        <Image src="/path-to-logo.png" alt="Platform Logo" width={100} height={30} />
        <h4 className="ml-2">Platform Name</h4>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly variant="light" as={Link} href="/options">
            <FiMenu size={24} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default TopNavbar;
