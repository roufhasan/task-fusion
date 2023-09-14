const Avatar = ({ image }) => {
  return (
    <div className="avatar online">
      <div className="w-20 rounded-full">
        <img src={image} />
      </div>
    </div>
  );
};

export default Avatar;
