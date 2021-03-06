import React from 'react';
import { Typewriter } from 'react-typewriting-effect';
import ConstructorTag from '../tags/ConstructorTag';
import ConstructorCloseTag from '../tags/ConstructorCloseTag';
import SkillsIcon from './SkillsIcon';
import SkillsList from './SkillsList';
//Logos
import html from '../../images/logos/html_5.png';
import css from '../../images/logos/css3.png';
import git from '../../images/logos/git.png';
import nodejs from '../../images/logos/nodejs_64.png';
import JavaScript from '../../images/logos/javascript.png';
import react from '../../images/logos/react.png';
import sass from '../../images/logos/sass.png';
import bootstrap from '../../images/logos/bootstrap.png';
import { node } from 'prop-types';

const SkillsContentTecnologies = () => {
  const timeTypeWritter = 100;
  return (
    <div className='skills__content tecnologies'>
      <div className='skills__list'>
        <span className='span__content strong'>
          <ConstructorTag tag='h3' />
          <Typewriter
            string='Tecnologías: '
            delay={timeTypeWritter}
            stopBlinkinOnComplete
            cursor='|'
            cursorClassName='cursor'
            className='text'
          />
          <ConstructorCloseTag tag='h3' />
        </span>
        <span className='span__content'>
          <ConstructorTag tag='ul' />
        </span>
        <SkillsList name='HTML 5' />
        <SkillsList name='CSS || SASS' />
        <SkillsList name='JavaScript ES6' />
        <SkillsList name='React || React Native' />
        <SkillsList name='NodeJS || ExpressJS' />
        <SkillsList name='Firebase' />
        <SkillsList name='Git' />
        <SkillsList name='Boostrap' />

        <span className='span__content'>
          <ConstructorCloseTag tag='ul' />
        </span>
      </div>
      <ul className='skills__logos'>
        <li>
          <SkillsIcon img={html} altImg='HTML' />
        </li>
        <li>
          <SkillsIcon img={css} altImg='CSS' />
        </li>
        <li>
          <SkillsIcon img={JavaScript} altImg='JavaScript' />
        </li>
        <li>
          <SkillsIcon img={react} altImg='React' />
        </li>
        <li>
          <SkillsIcon img={nodejs} altImg='NodeJS' />
        </li>
        <li>
          <SkillsIcon img={git} altImg='Git' />
        </li>
        <li>
          <SkillsIcon img={sass} altImg='Sass' />
        </li>
        <li>
          <SkillsIcon img={bootstrap} altImg='Bootstrap' />
        </li>
      </ul>
    </div>
  );
};

export default SkillsContentTecnologies;
