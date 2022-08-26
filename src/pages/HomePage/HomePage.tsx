import { useEffect, useState } from 'react';
import axios from 'axios';

import { AnimationHero } from '../../components/AnimationHero';
import { Navbar } from '../../components/Navbar';
import { Header } from '../../components/Sections/Header';
import { Team } from '../../components/Sections/Team';
import logo from '../../assets/logos/luna-icon-inverted-color.svg';
import data from '../../assets/data/data.json';
import { ClientLogos } from '../../components/Sections/ClientLogos';
import { logos } from '../../assets/data/logos';
import { Footer } from '../../components/Sections/Footer';

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
    }, 6000);

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
          <ClientLogos logos={logos} />
          <Team data={team} headline={data.team.headline} />
          <Footer data={data.footer} />
        </>
      )}
    </>
  );
};
