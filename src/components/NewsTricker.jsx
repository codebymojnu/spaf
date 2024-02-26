import "./news-ticker.css";

function NewsTicker() {
  return (
    <div className="news-ticker">
      <div className="ticker-content">
        <div className="ticker-text">News 1</div>
        <div className="ticker-text">News 2</div>
        <div className="ticker-text">News 3</div>
        {/* Add more news items as needed */}
      </div>
    </div>
  );
}

export default NewsTicker;
