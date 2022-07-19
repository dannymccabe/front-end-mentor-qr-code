import "./qr.scss";
import QRcode from "../../images/image-qr-code.png";

const Qr = () => {
  return (
    <div className="card-container">
      <img src={QRcode} alt="QRcode" className="QRcode" />
      <div className="text-container">
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Qr;
