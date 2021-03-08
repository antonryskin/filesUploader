function ImageThumb({ image }) {
  return (
    <img
      src={URL.createObjectURL(image)}
      alt={image.name}
      style={{ width: "200px", height: "300px" }}
    />
  );
}
export default ImageThumb;
