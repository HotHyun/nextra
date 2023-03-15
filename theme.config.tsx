import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Score_Bar from "./components/Score_Bar";
import Read from "./components/Read";
import Logo from "./components/Logo";
import Footer from "./components/footer";
import LogIn_Button from "./components/LogIn_Button";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <Logo></Logo>
    </span>
  ),
  navbar: {
    extraContent: <LogIn_Button></LogIn_Button>,
  },
  docsRepositoryBase: "https://github.com/HotHyun/nextra",
  footer: {
    text: <Footer></Footer>,
    //component: <Footer></Footer>,
  },
  primaryHue: {
    dark: 170,
    light: 275,
  },
  sidebar: {
    titleComponent({ title, type, route }) {
      if (type === "separator") {
        return <Score_Bar description="Your Score" />;
      } else {
        return (
          <div>
            <Read title={title} route={route}></Read>
          </div>
        );
      }
    },
    toggleButton: true,
    defaultMenuCollapseLevel: 3,
  },
  toc: {
    title: "Table of Contents",
  },
  editLink: {
    text: "",
  },
};

export default config;
