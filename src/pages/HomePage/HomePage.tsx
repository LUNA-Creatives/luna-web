import { useEffect, useState } from 'react';
import axios from 'axios';

import data from '../../assets/data/data.json';
import {
  ClientLogos,
  Header,
  Footer,
  Skills,
  Team,
  Navbar,
  CallToAction,
  Services,
  CustomerPromise,
} from '../../components/Sections';
import { CustomDivider } from '../../components/CustomDivider';
import { logos } from '../../assets/data/logos';
import '../../assets/fonts/fonts.css';
import { Icon } from '../../components/Sections/Skills/types';
import { SlsDbItem, TeamMember } from '../../types';
import { dbItemToItem } from '../../utils/dbItemToItem';

export const HomePage = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [icons, setIcons] = useState<Icon[]>([]);

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
      const iconsData: Icon[] = dbItemToItem(data);
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
      {icons && <Skills icons={icons} />}
      <Services data={data.services} />
      <CustomDivider hasBackgroundColor />
      <CustomerPromise data={data.customerPromise} />
      <CustomDivider />
      <Team data={team} headline={data.team.headline} />
      <Footer data={data.footer} />
    </>
  );
};
