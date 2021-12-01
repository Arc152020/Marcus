import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../img/inred.jpg'

function Navigation(){
    return (
        <NavigationStyled>
           <div className="avatar">
                <img src={avatar} alt="Avatar"/>
           </div>
           
           <ul className="nav-items">
               <li className="nav-item">
                    <NavLink to='/' activeClassName="active-class" exact>Home</NavLink>
               </li>

               <li className="nav-item">
                    <NavLink to='/about' activeClassName="active-class" exact>About</NavLink>
               </li>

               <li className="nav-item">
                    <NavLink to='/resume' activeClassName="active-class" exact>Resume</NavLink>
               </li>

               <li className="nav-item">
                    <NavLink to='/contact' activeClassName="active-class" exact>Contact</NavLink>
               </li>

               <li className="nav-item">
                    <NavLink to='/portfolios' activeClassName="active-class" exact>Portfolios</NavLink>
               </li>

              
               
           </ul>

           <footer className="footer">
               <p>© 2022 Marcus Dashe</p>
           </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 7px solid var(--border-color);
    .avatar{
        width: 80%;
        border-bottom: 2px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 80%;
            border-radius: 50%;
            border: 7px solid var(--border-color);
        }
    }

    .nav-items{
        width: 70%;
        text-align: center;
        .active-class{
            background-color: var( --secondary-color)
        }
        li{
            display: block;
            a{
                display: block;
                padding: .3rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 400;
                letter-spacing: 1px;
                
                &:hover{
                cursor: pointer;
                color: var(--white-color)
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    border-radius: 2px;
                    background-color: #a4acc4;
                    transition: All 0.4s cubic-bezier(1, -0.2, 0.25, .95);
                    z-index: -1;
                    opacity: 0.21;
                }
            }

            a:hover::before{
                width: 100%;
                height: 90%;
            }
        }
    }

    footer{
        border-top: 2px solid var(--border-color);
        width: 80%;
        p{
            padding: 0.7rem 0;
            font-size: 0.7rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;