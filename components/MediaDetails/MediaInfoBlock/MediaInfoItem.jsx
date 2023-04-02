function MediaInfoItem({ title, content }) {
  return (
    <li className="flex gap-2 text-lg">
      <p className="text-gray-300">{title}:</p>
      <p>{content}</p>
    </li>
  );
}

export default MediaInfoItem;
