import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";

const Contact = () => {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl">
        <p className="my-10 text-center text-3xl lg:text-8xl text-customText2 ">
          Interested in Working Together?
        </p>
        <p className="p-4 text-center text-xl">
            {CONTACT.text}
        </p>
        <p className="my-4 text-center text-2xl font-medium text-customText2 lg:pt-6 lg:text-5xl">
          <a
                href={`mailto:${CONTACT.email}`}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-customText transition-colors duration-500"
            >{CONTACT.email}</a></p>
        <p className="my-4 text-center text-2xl font-medium text-customText2 lg:pt-6 lg:text-5xl ">{CONTACT.phone}</p>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-customText2"
            >
                {link.icon}
            </a>
        ))}
      </div>
      <p className="my-8 text-center text-customText2">&copy; Zaid Alam, All rights reserved.</p>
    </section>
  );
};

export default Contact;
