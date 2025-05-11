import { useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const container = useRef();
  const image = useRef();

  const manageMouseMove = (event) => {
    const { clientX, clientY } = event;
    const containerPosition = container.current.getBoundingClientRect();
    const x = clientX - containerPosition.x;
    const y = clientY - containerPosition.y;
    image.current.style.top = `${y}px`;
    image.current.style.left = `${x}px`;
    draw(x, y);
  };

  const draw = (x, y) => {
    const div = document.createElement("div");
    div.classList.add(styles["circle"]);
    div.style.top = `${y}px`;
    div.style.left = `${x}px`;
    container.current.append(div);

    if (container.current.childNodes.length > 25) {
      erase();
    } else {
      setTimeout(() => {
        erase();
      }, 500);
    }
  };

  const erase = () => {
    container.current.removeChild(container.current.childNodes[1]);
  };

  return (
    <div className={styles.main}>
      <div
        ref={container}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.container}
      >
        <img ref={image} className={styles.img} src="/images/smiley.svg"></img>
      </div>
    </div>
  );
}
