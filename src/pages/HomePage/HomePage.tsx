import { useEffect, useState } from 'react';
import axios from 'axios';

import { AnimationHero } from '../../components/AnimationHero';
import { Navbar } from '../../components/Navbar';
import { Team } from '../../components/Sections/Team';
import data from '../../assets/data/data.json';
import { ClientLogos } from '../../components/Sections/ClientLogos';
import { logos } from '../../assets/data/logos';
import { Header } from '../../components/Sections/Header';
import { Footer } from '../../components/Sections/Footer';
import { Vision } from '../../components/Sections/Vision';
import { Skills } from '../../components/Sections/Skills';
import '../../assets/fonts/fonts.css';
import { TeamMember } from '../TeamPage/types';
import { SlsDbItem } from '../../types';
import { dbItemToItem } from '../../utils/dbItemToItem';
import { Skill } from './types';

export const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [icons, setIcons] = useState<Skill[]>([]);

  const fetchAndSetTeam = async () => {
    try {
      const { data } = await axios.get<SlsDbItem[]>('/api/team-member');
      const teamData: TeamMember[] = dbItemToItem(data);
      setTeam(teamData);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAndSetIcons = async () => {
    try {
      const { data } = await axios.get<SlsDbItem[]>('/api/icons');
      const iconsData: Skill[] = dbItemToItem(data);
      setIcons(iconsData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
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
          <Navbar data={data} />
          <Header data={data.header} />
          <Skills
            heading={data.skills.heading}
            techIcons={icons[0].techIcons}
            helperIcons={icons[0].helperIcons}
            designIcons={icons[0].designIcons}
          />
          <ClientLogos logos={logos} />
          <Vision data={data.vision} />
          <Team data={team} headline={data.team.headline} />
          <Footer data={data.footer} />
        </>
      )}
    </>
  );
};
