import { useEffect, useState } from 'react';
import axios from 'axios';

import { AnimationHero } from '../../components/AnimationHero';
import { Navbar } from '../../components/Navbar';
import { Header } from '../../components/Sections/Header';
import { Team } from '../../components/Team';
import logo from '../../assets/logos/luna-icon-inverted-color.svg';
import data from '../../assets/data/data.json';
import { ClientSection } from '../../components/ClientSection';

export const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(true);
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
      setShowAnimation(false);
    }, 7000);

    fetchAndSetUsers();
  }, []);

  return (
    <>
      {showAnimation ? (
        <AnimationHero />
      ) : (
        <>
          <Navbar logo={logo} />
          <Header data={data.header} />
          <ClientSection />
          <Team data={team} headline={data.team.headline} />
        </>
      )}
    </>
  );
};
