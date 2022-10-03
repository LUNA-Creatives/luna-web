import { useEffect, useState } from 'react';
import axios from 'axios';

import data from '../../assets/data/data.json';
import {
  ClientLogos,
  Header,
  Skills,
  Team,
  Navbar,
  CallToAction,
  Services,
  CustomerPromise,
  Footer,
} from '../../components/Sections';
import { CustomDivider } from '../../components/CustomDivider';
import { logos } from '../../assets/data/logos';
import '../../assets/fonts/fonts.css';
import { TeamMember } from '../TeamPage/types';
import { Skill } from './types';
import { SlsDbItem } from '../../types';
import { dbItemToItem } from '../../utils/dbItemToItem';

export const HomePage = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [icons, setIcons] = useState<Skill[]>();

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
    fetchAndSetTeam();
    fetchAndSetIcons();
  }, []);

  return (
    <>
      <Navbar data={data} />
      <Header data={data.header} />
      <ClientLogos logos={logos} />
      <CallToAction data={data.callToAction} />
      {icons && (
        <Skills
          heading={data.skills.heading}
          techIcons={icons[0].techIcons}
          helperIcons={icons[0].helperIcons}
          designIcons={icons[0].designIcons}
        />
      )}
      <Services data={data.services} />
      <CustomDivider />
      <CustomerPromise data={data.customerPromise} />
      <Team data={team} headline={data.team.headline} />
      <Footer data={data.footer} />
    </>
  );
};
