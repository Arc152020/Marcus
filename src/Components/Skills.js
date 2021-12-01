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
                            title={'MongoDB, NextJS, NodeJS (MNN Stack)'}
                            width={'90%'}
                            text={'90%'}
                        />

                        <ProgressBar
                            title={'FastAPI, NextJS, MongoDB (FANM Stack)'}
                            width={'89%'}
                            text={'89%'}
                        />

                        <ProgressBar
                            title={'DevOps (Docker, Git/Github, Linux Bash, CI)'}
                            width={'90%'}
                            text={'90%'}
                        />

                        <ProgressBar
                            title={'Mobile Devs (Dart/Flutter )'}
                            width={'70%'}
                            text={'70%'}
                        />

                        <ProgressBar
                            title={'UI Design (Figma, Adobe Illustrator)'}
                            width={'65%'}
                            text={'65%'}
                        />


                        <ProgressBar
                            title={'Data Science (ML, Data Visualization)'}
                            width={'60%'}
                            text={'60%'}
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
