function Title({ tag = 'h1', text, className }) {
  const ContainingTag = tag;

  return <ContainingTag className={className}>{text}</ContainingTag>;
}

export default Title;
