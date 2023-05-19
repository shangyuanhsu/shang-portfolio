// Spline 3D work room
import Spline from '@splinetool/react-spline';
import styles from '../styles/Home.module.css';

const MySpline = ()=> {
  return (
    <div className={styles.MySline}>
    <Spline scene="https://prod.spline.design/qB5IZyEO7ZaaEufC/scene.splinecode" />
    </div>
  );
}

export default MySpline;
