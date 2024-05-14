import { Component } from "react";
import { Link } from "react-router-dom";
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
              <Link to="/KVKK">KVKK Hakkında Bilgilendirme</Link>
            </p>
            <p className={globalStyles["description-one-small"]}>
              <Link to="/KVKK2">KVKK Aydınlatma Metni</Link>
            </p>
            <p className={globalStyles["description-one-small"]}>
              <Link to="/QualityCertificates">Quality Certificates</Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
