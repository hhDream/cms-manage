/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-31 13:32:11
 * @LastEditTime: 2022-03-31 15:54:09
 * @LastEditors: Fenghua Zhang
 */
import React from "react";
import { Menu } from "antd";
import store from "@/store/index";
import { Link, useNavigate } from 'react-router-dom';

export default function LeftMenu() {
  const menuList = store.getState().user.webPowers;
  const navigate = useNavigate();
  const goPage = (path)=>{
    console.log('path :>> ', path);
    navigate(path)
  }

  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {menuList.map((d) => {
          return (
            <Menu.SubMenu key={d.meta.title} title={d.meta.title} >
              {d.children.map((child) => {
                if (child.hidden) {
                  return <></>;
                } else {
                  return (
                    <Menu.Item  key={child.meta.title+child.meta.permissionId}>
                    <Link to={child.path}>
                    {child.meta.title}
                    </Link>
                    </Menu.Item>
                  );
                }
              })}
            </Menu.SubMenu>
          );
        })}
      </Menu>
    </>
  );
}
