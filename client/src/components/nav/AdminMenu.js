import React from "react";
import { Menu } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      key: "2",
      icon: <LaptopOutlined />,
      label: "Category",
      items: [
        {
          key: "2-1",
          label: "Create Category",
          link: "/category/create",
        },
        {
          key: "2-2",
          label: "Manage Category",
          link: "/category/manage",
        },
        {
          key: "2-3",
          label: "Subcategory",
          items: [
            {
              key: "2-3-1",
              label: "Create Subcategory",
              link: "/category/subcategory/create",
            },
            {
              key: "2-3-2",
              label: "Manage Subcategory",
              link: "/category/subcategory/manage",
            },
          ],
        },
      ],
    },
    {
      key: "3",
      icon: <NotificationOutlined />,
      label: "Product",
      items: [
        {
          key: "3-1",
          label: "Create Product",
          link: "/product/create",
        },
        {
          key: "3-2",
          label: "Manage Product",
          link: "/product/manage",
        },
      ],
    },
  ];

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.items) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.items)}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <NavLink to={item.link}>{item.label}</NavLink>
        </Menu.Item>
      );
    });
  };

  return (
    <Menu
      className="flex-grow-1"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["2-3"]} // Open the "Subcategory" submenu by default
    >
      {renderMenuItems(menuItems)}
    </Menu>
  );
};

export default AdminMenu;
