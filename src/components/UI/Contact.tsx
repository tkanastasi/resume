type ContactProps = {
  text: string;
  href?: string;
};

export const Contact = ({ text, href }: ContactProps) => {
  if (href) {
    return (
      <div style={{ marginBottom: 8 }}>
        <a href={href}>{text}</a>
      </div>
    );
  }

  return <div style={{ marginBottom: 8 }}>{text}</div>;
};