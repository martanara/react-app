import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle'
import PageSubtitle from '../PageSubtitle/PageSubtitle'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>
      <PageSubtitle>A simple to-do app, with lists, columns and cards</PageSubtitle>
    </div>
  );
};

export default Hero;