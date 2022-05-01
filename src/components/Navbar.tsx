import { ActionIcon } from '@mantine/core';
import { Home } from 'tabler-icons-react';
// components
import PortfolioDrawer from './portfolio/Drawer';
import ContactModal from './contact/Modal';

function Navbar() {
    
    return (
        <div className="nav_bar border-2 flex justify-evenly">
            <PortfolioDrawer />
            <ActionIcon>
                <Home />
            </ActionIcon>
            <ContactModal />
        </div>
    )
}

export default Navbar;
