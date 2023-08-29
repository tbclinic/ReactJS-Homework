export default function Profile(props) {
  const { name, lastName, children } = props;

  return (
    <h1>
      Name: {name} {lastName} {children}
    </h1>
  );
}
