"use client";

import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import '@/styles/style.css'


export function FooterPage() {
  return (
    <footer className="flex-grow mb-0">
      <div className="footer-content">
        <div className="maxlearn wd">
          <h3>MaxLearn</h3>
          <p>
            Roadmap, and the actual curriculum may vary depending on the
            university or college you attend.
          </p>
          <div className="iii">
            <i className="bx bx-code-block"></i>
            <i className="bx bx-code-alt"></i>
            <i className="bx bx-math"></i>
          </div>
        </div>
        <hr />
        <div className="explore wd h2-exf">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Learn Coding</a>
            </li>
            <li>
              <a href="#">Learn DSA</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
          </ul>
        </div>

        <div className="contact wd h2-exf">
          <h3>Contact</h3>
          <a href="#">Universityabc@gmail.com</a>
          <p>+91 9999-999-999</p>
        </div>

        <div className="follow wd h2-exf">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="https://github.com/Lalitmax">
              <BsGithub /> GitHub
            </a>
            <a href="https://twitter.com/lalit__max">
              <BsTwitter /> Twitter
            </a>
            <a href="https://instagram.com/lalit.max?igshid=MzNlNGNkZWQ4Mg==">
              <BsInstagram /> Instagram
            </a>
            <a href="https://www.linkedin.com/in/lalitmax">
              <BsLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="reserved-footer">
        <p style={{ color: "#fff", fontWeight: "bold" }} className="foo-p">
          &copy; Copyright @ 2023{" "}
          <a href="#home">
            <span>MaxLearn</span>
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
