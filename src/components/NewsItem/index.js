
const NewsItem = ({ title, description, fetchImage, url }) => {
  const defaultImage =
    'https://res.cloudinary.com/dcfuscgxx/image/upload/v1706019713/news-headline-rolled-paper_u7zrna.jpg';

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px', minWidth: '200px' }}>
      <img
        src={fetchImage ? fetchImage : defaultImage}
        style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        className="card-img-top"
        alt="News Thumbnail"
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : 'Public access to information about news is not available.'}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

