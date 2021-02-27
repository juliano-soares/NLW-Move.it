import styles from '../styles/components/Countdown.module.css'
import { FaCheckCircle, FaTimes, FaCaretRight } from "react-icons/fa";
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ?
        (<button
          disabled
          className={styles.countdownButton}>
          Ciclo encerrado
          <FaCheckCircle style={{ margin: '10px', color: 'var(--green)' }} />
        </button>)
        :
        (
          <>
            {isActive ?
              (<button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonIsActive}`}
                onClick={resetCountdown}>
                Abandonar ciclo
                <FaTimes style={{ margin: '10px' }} />
              </button>)
              :
              (<button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}>
                Iniciar um ciclo
                <FaCaretRight style={{ margin: '10px' }} />
              </button>)
            }
          </>
        )
      }
    </div>
  );
}