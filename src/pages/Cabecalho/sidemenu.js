import "materialize-css";
import { Button, SideNavItem, Icon, SideNav } from "react-materialize";
import React, { useEffect } from "react";
import logodotei from "../../assets/imagens/logodotei.png";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

export default function SideMenu() {
  const [width, setwidth] = React.useState(window.innerWidth);

  const updateWidthAndwidth = () => {
    setwidth(window.innerWidth);
    console.log(width);
  };
  useEffect(() => {
    console.log(width);
    window.addEventListener("resize", updateWidthAndwidth);
    return () => window.removeEventListener("resize", updateWidthAndwidth);
  });

  return width <= 600 ? (
    <div style={{marginLeft:(width-100)+'px' }} >
      <style>
        {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
      </style>
      <SideNav  
        id="SideNav-10"
        options={{
          draggable: true,
        }}
        trigger={
          <Button className='btnMenu'  node="button">
            <Icon>menu</Icon>
          </Button>
        }
      >
        <SideNavItem
          user={{
            background: "",
            email: "",
            image: logodotei,
            name: "John Doe",
          }}
          userView
        />
                          <Link id="menuitem" to="/profileong"><SideNavItem icon={<Icon>assessment</Icon>}>Admin</SideNavItem></Link>

        
        <Link id="menuitem" to="/adocao"> <SideNavItem icon={<Icon>favorite</Icon>}>Home</SideNavItem> </Link>
       
        <SideNavItem divider />
        
        <SideNavItem subheader>Menu do usuário</SideNavItem>
        <Link id="menuitem" to="/profileuser"><SideNavItem icon={<Icon>person</Icon>}>Perfil</SideNavItem></Link>
        <Link id="menuitem" to="/"><SideNavItem waves icon={<Icon>exit_to_app</Icon>}>
          logout
        </SideNavItem></Link>
      </SideNav>
    </div>
  ) : (
    <div></div>
  );
}
