import React from "react";
import { useState } from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

interface BreadcrumbLink {
  label: string;
  path: string;
}

const Breadcrumb: React.FC<{}> = () => {
  const location = useLocation();
  const [prevPaths, setPrevPaths] = useState<string[]>([
    "/",
    location.pathname,
  ]);

  const links = [
    { label: "Home", path: "/" },
    { label: "Register", path: "/register" },
    { label: "Test", path: "/test" },
    { label: "News", path: "/news" },
    { label: "Shop", path: "/shop" },
  ];

  // const prevLinks = links.filter(
  //   (link) => link.path === prevPath || link.path === location.pathname
  // );
  // const handleNavigation = (path: string) => {
  //   setPrevPaths([...prevPaths, path]);
  // };

  const handleNavigation = (path: string) => {
    if (!prevPaths.some((prevPath) => prevPath === path)) {
      setPrevPaths([...prevPaths, path]);
    }
  };
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {prevPaths?.map((path, index) => {
          const link = links.find((link) => link.path === path);
          if (!link) {
            return null;
          }
          const { label } = link;
          const isActive = path === location.pathname;
          return (
            <Link
              key={label}
              color="inherit"
              href={path}
              onClick={() => handleNavigation(path)}
              className={`${isActive ? "active" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
