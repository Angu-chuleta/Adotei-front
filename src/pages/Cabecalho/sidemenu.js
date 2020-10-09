import "materialize-css";
import { Button, SideNavItem, Icon, SideNav } from "react-materialize";
import React from "react";
import logodotei from "../../assets/imagens/logodotei.png";
import "./styles.css";
import { Link ,useHistory} from "react-router-dom";

export default function SideMenu() {
  const [nome, setNome] = React.useState("você!");
  const [role, setRole] = React.useState(1);
  const [width, setwidth] = React.useState(window.innerWidth);
  const history = useHistory();


  React.useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("adotei@token"));
    if (saved !== null){
      setNome(saved.user.name);
      setRole(saved.role);
      console.log("role");
    }
    const updateWidth =  ()=>  {
      setwidth(window.innerWidth);
      console.log(width);
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  },[width]);

  const logout = () => {
    localStorage.removeItem("adotei@token");
    history.push("/");
  }

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
                {role === 2?                      <SideNavItem  icon={<Icon>assessment</Icon>}><Link id="menuitem" to="/profileong">Admin</Link></SideNavItem>
:<div></div>}    

        
         <SideNavItem  icon={<Icon>favorite</Icon>}><Link id="menuitem" to="/adocao">Home</Link></SideNavItem> 
       

        <SideNavItem divider />
        <SideNavItem  subheader>Menu do usuário</SideNavItem>


        <SideNavItem  icon={<Icon>person</Icon>}><Link id="menuitem" to="/profileuser">Perfil de {nome}</Link></SideNavItem>
       <SideNavItem  waves><Icon>exit_to_app</Icon>
          <a onClick= {()=>{logout()}}   id="menuitem" > logout</a>
        </SideNavItem>
      </SideNav>
    </div>
  ) : (
    <div></div>
  );
}
