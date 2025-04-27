import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";

const dropdown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 text-3xl py-2font-semibold text-[#f280cb] hover:text-gray-100 focus:outline-hidden">
                    <i className="fa fa-bars" id="bars"></i>
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Homepagina
                        </Link>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/NieuweFractie"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Fractie 2025-2026
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/Fractie"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Fractie 2024-2025
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/OudeFracties"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Oude fracties
                        </Link>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/Speerpunten"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Speerpunten & initiatieven
                        </Link>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/Universiteitsraad"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Universiteitsraad
                        </Link>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/Contact"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Contact
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/WordLid"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Word lid!
                        </Link>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
};
export default dropdown;
