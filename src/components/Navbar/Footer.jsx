import { Component } from "react";
import globalStyles from "../../global.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className={globalStyles["outer-container"]}>
          <div
            className={`${globalStyles["padding-container"]} ${globalStyles["footer-flow"]}`}
          >
            <p className={globalStyles["description-one-small"]}>
              2023 © OneRX All Rights Reserved
            </p>
            <p className={globalStyles["description-one-small"]}>
              KVKK Hakkında Bilgilendirme
            </p>
            <p className={globalStyles["description-one-small"]}>
              KVKK Aydınlatma Metni
            </p>
            <p className={globalStyles["description-one-small"]}>
              Quality Certificates
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
