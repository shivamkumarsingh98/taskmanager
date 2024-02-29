/* eslint-disable react/prop-types */
import styles from './Chip.module.css';
const Chip = ({bgColor,text,textClr}) => {
  return (
      <>
          <span className={styles.chip}  style={{
              backgroundColor: bgColor,
              color: textClr
          }}>{text }</span>
      </>
  )
}

export default Chip