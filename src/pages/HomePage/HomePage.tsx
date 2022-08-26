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
import { Skills } from '../../components/Sections/Skills';
import '../../assets/fonts/fonts.css';

export const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [team, setTeam] = useState([]);
  const [icons, setIcons] = useState([]);

  const fetchAndSetTeam = async () => {
    try {
      const { data } = await axios.get('/api/team-member');
      setTeam(data as any);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAndSetIcons = async () => {
    try {
      const { data } = await axios.get('/api/icons');
      setIcons(data as any);
    } catch (e) {
      console.log(e);
    }
  };

  const skills = {
    data: icons,
    heading: data.skills.heading,
  };
  useEffect(() => {
    setTimeout(function () {
      setShowAnimation(false);
    }, 6000);

    fetchAndSetTeam();
    fetchAndSetIcons();
  }, []);

  return (
    <>
      {showAnimation ? (
        <AnimationHero />
      ) : (
        <>
          <Navbar logo={logo} />
          <Header data={data.header} />

          <Skills skills={skills} />
          <ClientLogos logos={logos} />
          <Team data={team} headline={data.team.headline} />
          <Footer data={data.footer} />
        </>
      )}
    </>
  );
};
