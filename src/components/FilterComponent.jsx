import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

function FilterComponent({
    children,
    ToggleComponent,
    toggleClassname,
    openMenu, styledata,
    setOpenMenu,
    onclickCloseMenu,
}) {
    return (
        <Dropdown isOpen={openMenu} style={styledata} toggle={() => setOpenMenu(!openMenu)} className="d-inline-block ">
            <DropdownToggle className={`btn waves-effect  ${toggleClassname}`} tag="button">
                <ToggleComponent />
            </DropdownToggle>
            <DropdownMenu
                // className="dropdown-menu-end "
                onClick={() => {
                    if (!onclickCloseMenu) {
                        setTimeout(() => {
                            setOpenMenu(false);
                        }, 200);
                    }
                }}
            >
                {children}
            </DropdownMenu>
        </Dropdown>
    );
}

export default FilterComponent;
