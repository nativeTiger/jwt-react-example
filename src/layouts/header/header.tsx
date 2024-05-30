import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RxChevronDown, RxMix } from "react-icons/rx";
import { RiUserFill, RiLogoutBoxRLine } from "react-icons/ri";
import { Button } from "@/components/button/button";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "@/utils/routes-constants";
import { useLogOut } from "@/services/logout/api";

export const Header = () => {
  const navigate = useNavigate();

  const logoutMutation = useLogOut();

  return (
    <header className="header">
      <nav className="nav">
        <Link to={Routes.HOME} className="flex items-center space-x-3">
          <figure className="text-lg">
            <RxMix />
          </figure>
          <h2 className="text-xl font-bold">Hello World</h2>
        </Link>
        <div className="flex items-center space-x-2">
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex mt-1.5">
              <img
                src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                alt="user-image"
                className="nav__menu-image"
              />
              <div className="nav__menu-icon">
                <RxChevronDown />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="nav__menu-items">
                <Menu.Item>
                  <Button
                    type="button"
                    variant="transparent"
                    className="justify-start"
                    onClick={() => navigate(Routes.CUSTOMER)}
                  >
                    <RiUserFill /> Profile
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    type="button"
                    variant="transparent"
                    className="justify-start"
                    onClick={() => logoutMutation.mutate()}
                  >
                    <RiLogoutBoxRLine /> Logout
                  </Button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};
