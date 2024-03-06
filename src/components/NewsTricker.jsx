import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./news-ticker.css";

function NewsTicker({ newsData }) {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="flex news-ticker">
      {/* Special News Animation */}
      <div className="special-news-animation">বিশেষ সংবাদ</div>

      <div className="ticker-content">
        {newsData.map((news, index) => (
          <div
            className="ticker-text"
            key={index}
            onClick={() => handleNewsClick(news)}
          >
            {news.title}
          </div>
        ))}
      </div>
      {selectedNews && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedNews.title}</h2>
            <div className="markdown-container">
              <ReactMarkdown>{selectedNews.markdownTextNews}</ReactMarkdown>
            </div>
            <div className="flex justify-center">
              <img src={selectedNews?.image} alt={selectedNews.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsTicker;
