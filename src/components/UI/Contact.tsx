type ContactProps = {
  text: string;
  href?: string;
  icon?: string;
};

export const Contact = ({ text, href, icon }: ContactProps) => {
  return (
    <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
      {icon && (
        <img
          src={icon}
          style={{ width: 16, height: 16 }}
        />
      )}

      {href ? (
        <a href={href}>{text}</a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};