import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';


function Skills() {
    return (
        <SkillsStyled>
          
                <Title title={"Skills"} span={"Skills"} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'MERN Stack'}
                            width={'90%'}
                            text={'90%'}
                        />

                        <ProgressBar
                            title={'FARM Stack'}
                            width={'89%'}
                            text={'89%'}
                        />

                        <ProgressBar
                            title={'DevOps (Docker, Git/Github, Virtualmin, CPanel)'}
                            width={'95%'}
                            text={'95%'}
                        />

                        <ProgressBar
                            title={'Mobile Devs (Dart, Flutter )'}
                            width={'70%'}
                            text={'70%'}
                        />

                        <ProgressBar
                            title={'UI Design (Figma, Adobe Illustrator)'}
                            width={'65%'}
                            text={'65%'}
                        />

                        <ProgressBar
                            title={'Java (JavaFX, JSP, Servlet)'}
                            width={'80%'}
                            text={'80%'}
                        />

                        <ProgressBar
                            title={'Office Suite (Word, PowerPoint, Excel, Access)'}
                            width={'90%'}
                            text={'90%'}
                        />

                        <ProgressBar
                            title={'Linux (Bash Scripting)'}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>
            
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem; 
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
