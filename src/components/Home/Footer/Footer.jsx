import { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className={styles["outer-container"]}>
          <div className={styles["padding-container"]}>
              <p className={styles["description-one-small"]}>
                2023 © OneRX All Rights Reserved
              </p>
              <p className={styles["description-one-small"]}>
                KVKK Hakkında Bilgilendirme
              </p>
              <p className={styles["description-one-small"]}>
                KVKK Aydınlatma Metni
              </p>
              <p className={styles["description-one-small"]}>
                Quality Certificates
              </p>
            </div>
          </div>
      </>
    );
  }
}

export default Footer;
