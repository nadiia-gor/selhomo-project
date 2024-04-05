import NewsCard from '../../components/NewsCard/NewsCard';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import './Blog.scss';

const cardText = {
  header: "Let's get a solution for building construction work",
  date: '26 December 2022',
};
const cardContent = [
  { image: 'src/pages/Blog/images/news1.png' },
  { image: 'src/pages/Blog/images/news2.png' },
  { image: 'src/pages/Blog/images/news3.png' },
];

const Blog = () => {
  return (
    <>
      <TitleBanner
        titleText={'Articles & News'}
        backgroundImage={'src/pages/Blog/images/titlebanner.png'}
      />
      <div className="blog">
        <div className="blog--search">
          <input type="text" name="" id="" placeholder="Search" />
          <img src="src/pages/Blog/images/search.svg" alt="" />
        </div>
        <div className="blog--latest">
          <h2>Latest Post</h2>
          <div className="blog--latest--card">
            <img src="src/pages/Blog/images/latest.png" alt="" />
            <div className="blog--latest--card--text">
              <h4>Low Cost Latest Invented Interior Designing Ideas</h4>
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in.Contrary to popular belief
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classica.
              </p>
              <div className="blog--latest--card--footer">
                <div className="blog--latest--card--footer--date">
                  {cardText.date}
                </div>
                <img src="src/pages/Blog/images/arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="blog--articles">
          <h2>Articles & News</h2>
          <div className="blog--articles--cards">
            {cardContent.map((card) => (
              <NewsCard
                newsPhoto={card.image}
                newsTitle={cardText.header}
                newsDate={cardText.date}
                key={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
