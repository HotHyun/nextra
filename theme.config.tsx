import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Score_Bar from "./components/Score_Bar";
import Read from "./components/Read";
import Logo from "./components/Logo";
import Footer from "./components/footer";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <Logo></Logo>
    </span>
  ),
  project: {
    link: "https://github.com/HotHyun/nextra",
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
