function Services() {
  return (
    <div>
      <div className="portfolio-flex">
        <div>
          <h2>
            Web Development
            <button className="arr-btn">&rarr;</button>
          </h2>
        </div>
        <div>
          <h2>
            Digital Marketing
            <button className="arr-btn">&rarr;</button>
          </h2>
        </div>
        <div>
          <h2>
            Computer Services
            <button className="arr-btn">&rarr;</button>
          </h2>
        </div>
        <div>
          <h2>
            Cloud & Data
            <button className="arr-btn">&rarr;</button>
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div>
            {" "}
            <button className="explorer-btn">
              EXPLORE OUR PORTFOLIO &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
