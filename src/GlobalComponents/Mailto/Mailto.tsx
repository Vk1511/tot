const Mailto = ({ email, children }: any) => {
  return <a href={`mailto:${email}`}>{children}</a>; //${params} after  ${email}
};

export default Mailto;