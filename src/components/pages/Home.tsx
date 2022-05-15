import React, { useContext, useEffect } from 'react';

// Import Styles
import '../../styles/home.scss';

// Import Components
import Loading from '../ui/Loading';
import Card from '../ui/Card';
import Header from '../ui/Header';

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
          {wantedList.map((item, index) => (
            <Card key={index} wanted={item} />
          ))}
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
          <Card wanted={wantedList[0]}/>
        </div>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default Home