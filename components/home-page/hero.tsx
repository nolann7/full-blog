import Image from 'next/image';
import React from 'react';

import classes from './hero.module.css';

type HeroProps = { children?: React.ReactNode };

const Hero = (props: HeroProps) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/main-image.png"
          alt="An Image showing..."
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Alex</h1>
      <p>
        I blog about web development, especially frontend libraries and
        frameworks like React.js and Next.js
      </p>
    </section>
  );
};

export default Hero;
