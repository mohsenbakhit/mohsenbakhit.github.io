import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../styles";
import { contacts } from "../constants";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Mohsen",
      "a Software Engineer",
      "an amateur weightlifter",
      "a cinephile",
      "a mediocre centre back",
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex justify-center items-center`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hello! I'm <span style={{ color: "#45d0e2" }}>{text}</span>
            <Cursor />
          </h1>
          <h4
            className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          >
            Computer Science @ UBC
          </h4>
          <div className="mt-8 flex justify-center gap-10">
            {contacts.map((contact, index) => {
              const href = contact.title.includes("gmail")
                ? `mailto:${contact.title}`
                : contact.title;
              return (
                <a
                  key={index}
                  href={href}
                  className="flex flex-col items-center"
                >
                  <img
                    src={contact.icon}
                    className="w-10 h-10 object-contain"
                    alt={contact.title}
                  />
                  <span className="p-3">{contact.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
