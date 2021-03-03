function About({ shop }: { shop: StoreResponse }) {
  if (shop.data)
    return (
      <div className="container p-4">
        <h3>{shop.data.storeName}</h3>
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <p>{shop.data.welcomeMessage}</p>
        </div>

        <h3>Contact Us</h3>
        <ul>
          <li>
            <a
              className="text-white"
              href={`mailto:${shop.data.contact.email}`}
            >
              {shop.data.contact.email}
            </a>
          </li>
          <li>
            <a
              className="text-white"
              href={`https://wa.me/${shop.data.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact On Whatsapp
            </a>
          </li>
          <li>
            <a
              className="text-white"
              href={`tel:+${shop.data.contact.phoneNumber}`}
            >
              +{shop.data.contact.phoneNumber}
            </a>
          </li>
        </ul>

        {shop.data.socialMedia && (
          <>
            <h3>Socials</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>{" "}
          </>
        )}
      </div>
    );
  return <></>;
}

export default About;
