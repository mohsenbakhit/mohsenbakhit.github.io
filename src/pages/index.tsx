import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <header className="span">
        <h1 className="font-bold">Mohsen Bakhit</h1>
        <ul className="navbar">
          <li>Home</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>

      <div>
        <p className="text-green">Hi, my name is</p>
        <h1 className="text-5xl">Mohsen</h1>
        <p>Software Engineer</p>
        <p>History Buff</p>
        <p>Two-foot Tackle Specialist</p>
      </div>
    </div>
  )
}
