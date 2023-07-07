export default function ErrorPage({ data }) {
  return (
    <div>
      <h1>😵 {data.error.toString()}</h1>
    </div>
  );
}
