import PropTypes from "prop-types";

const ContactLink = ({
  IconComponent,
  href,
  children,
  reverseOrder = false,
  ...rest
}) => {
  return (
    <div className="flex items-center text-center md:text-left">
      {reverseOrder ? (
        <>
          {children && (
            <a href={href} className="text-darkgray text-lg mr-2" {...rest}>
              {children}
            </a>
          )}
          <IconComponent {...rest} />
        </>
      ) : (
        <>
          <IconComponent {...rest} />
          {children && (
            <a href={href} className="text-darkgray text-lg ml-2" {...rest}>
              {children}
            </a>
          )}
        </>
      )}
    </div>
  );
};

ContactLink.propTypes = {
  IconComponent: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node, // Aquí hemos quitado el `.isRequired`
  reverseOrder: PropTypes.bool,
};

export default ContactLink;
