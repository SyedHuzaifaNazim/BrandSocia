export default function PlaceholderImage({ 
  width = 400, 
  height = 300, 
  className = "", 
  text = "Placeholder" 
}) {
  const aspectRatio = width / height;
  
  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center ${className}`}
      style={{ 
        width: width + 'px', 
        height: height + 'px',
        aspectRatio: aspectRatio
      }}
    >
      <span className="text-gray-500 text-sm">{text}</span>
    </div>
  );
}