import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch'
import { BsDot, BsFillMoonFill, BsSun, BsSunFill } from "react-icons/bs";
import { Nav } from './styles';

interface props {
    toggleTheme(): void;
  }
  

function Navbar ({ toggleTheme }: props)  {
    const { colors, title } = useContext(ThemeContext)
  return (
    <Nav>
      <div className="content">
        <h1>Quadro Kanban</h1>

        <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            offColor={colors.title}
            onColor={colors.textSecondary}
            uncheckedIcon={
              <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "orange",
                paddingRight: 2
              }}
            >
              <BsFillMoonFill />
            </div>
            }
            checkedIcon={
              <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "orange",
                paddingRight: 2
              }}
            >
              <BsSunFill />
            </div>
            }
            uncheckedHandleIcon={
              <div
                style={{
                  height: "100%",
                  background: "white",
                  borderRadius: '100%',
                }}
              >
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  height: "100%",
                  background: "#333",
                  borderRadius: '100%',
                }}
              >
              </div>
            }

          />
          </div>
    </Nav>
  );
}

export default Navbar;