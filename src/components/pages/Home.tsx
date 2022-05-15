import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import '../../styles/home.scss';

// Import Components
import Loading from '../ui/Loading';
import Card from '../ui/Card';
import Header from '../ui/Header';
import Typography from '../ui/Typography';
import User from '../ui/icons/User';

// Import Context
import { AuthContext } from '../../context/auth/AuthProvider';
import { WantedContext } from '../../context/wanted/WantedProvider';

// Import data for initialization
import data from '../../data/initList.json';



type Props = {}

const Home = (props: Props) => {
  const { login, user } = useContext(AuthContext);
  const { wantedList, initializeWantedList } = useContext(WantedContext);

  useEffect(() => {
    if(localStorage.getItem('user') && user === null) {
      const u = JSON.parse(localStorage.getItem('user') || '{}')
      login({ username: u.username, password: u.password })
    };

    if(localStorage.getItem('wantedList') === null) {
      initializeWantedList(data.profiles);
      localStorage.setItem('wantedList', JSON.stringify(data.profiles));
    } else if (localStorage.getItem('wantedList') !== null && wantedList === null) {
      initializeWantedList(JSON.parse(localStorage.getItem('wantedList') || '[]'));
    }

  }, [initializeWantedList, login, user, wantedList])

  if(localStorage.getItem('wantedList') !== null && wantedList) {
    return (
      <div className="home-container">
        <Header />
        <div className="card-container">
          <Link to="/wanted-profile-detail/add" className="card">
            <div className="internal-card add-user-card">
              <User className="add-user-icon" />
              <div className={"wanted-status ws-grey"}>
                  <Typography HTMLElement="p">Add</Typography>
              </div>
            </div>
          </Link>
          {wantedList.map((item, index) => (
            <Card key={index} wanted={item} />
          ))}
        </div>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default Home