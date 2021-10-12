import "./Main.css";
import Charts from "../Charts/Charts";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img
            src="https://cdn.pixabay.com/photo/2020/10/04/05/50/woman-5625309__480.png"
            alt=""
          />
          <div className="main__greeting">
            <h1>Hello Dashboard</h1>
            <p>Welcome to admin dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of subscribers</p>
              <span className="font-bold text-title">1000</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total watching</p>
              <span className="font-bold text-title">23000</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-video fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total videos</p>
              <span className="font-bold text-title">670</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total likes</p>
              <span className="font-bold text-title">890</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>London, England</p>
              </div>
              <i className="fa fa-dollar-sign"></i>
            </div>
            <Charts />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>London, England</p>
              </div>
              <i className="fa fa-dollar-sign"></i>
            </div>
            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$92,000</p>
              </div>
              <div className="card2">
                <h1>Sales</h1>
                <p>$132,000</p>
              </div>
              <div className="card3">
                <h1>Users</h1>
                <p>7000</p>
              </div>
              <div className="card4">
                <h1>Orders</h1>
                <p>3444</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
