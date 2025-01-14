import Image from "next/image";
import styles from "./page.module.css";
import Main from "./components/Main";
export default async function Home({lang}) {

  return (
    <div className={styles.page}>
      <Main/>
    </div>
  );
}
