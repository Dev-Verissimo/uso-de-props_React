export default function Post({ img, alt, titulo }) {
  return (
    <div class="post">
      <img src={"img/" + img} alt={alt} />
      <h1 class="titulo">{titulo}</h1>
    </div>
  );
}
