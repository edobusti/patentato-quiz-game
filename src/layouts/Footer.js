import linkedinIcon from "../img/linkedin-logo.png";

export default function Footer() {
  return (
    <footer>
      Copyright @ 2024 Edoardo Busti{" "}
      <a href="https://www.linkedin.com/in/edobusti/">
        <img
          className="footer-icon"
          src={linkedinIcon}
          alt="linkedin-icon"
        ></img>
      </a>
    </footer>
  );
}
