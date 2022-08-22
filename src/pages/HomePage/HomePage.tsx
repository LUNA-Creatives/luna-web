import { useEffect, useState } from 'react';
import axios from 'axios';

import { AnimationHero } from '../../components/AnimationHero';
import { Navbar } from '../../components/Navbar';
import { Header } from '../../components/Sections/Header';
import { Team } from '../../components/Team';
import logo from '../../assets/logos/luna-icon-inverted-color.svg';
import data from '../../assets/data/data.json';

export const HomePage = () => {
  const [visible, isVisible] = useState(true);
  const [team, setTeam] = useState([]);

  const fetchAndSetUsers = async () => {
    try {
      const { data } = await axios.get('/api/team-member');
      setTeam(data as any);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(function () {
      isVisible(false);
    }, 7000);

    fetchAndSetUsers();
  }, []);

  return (
    <>
      {visible ? (
        <AnimationHero />
      ) : (
        <>
          <Navbar logo={logo} />
          <Header data={data.header} />
          <Team data={team} headline={data.team.headline} />
        </>
      )}
    </>
  );
};
