import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'

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
  Contact,
  Popup,
} from '../../components/Sections';
import { CustomDivider } from '../../components/CustomDivider';
import { logos } from '../../assets/data/logos';
import '../../assets/fonts/fonts.css';
import { Icon } from '../../components/Sections/Skills/types';
import { SlsDbItem, TeamMember } from '../../types';
import { dbItemToItem } from '../../utils/dbItemToItem';
import { useStore } from '../../state/GlobalState';

export const HomePage = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [icons, setIcons] = useState<Icon[]>([]);
  const showPopup = useStore((state) => state.showPopup);

  const title = "Home of creativity"
  const description =  "Welcome to LUNA Creatives. Your creative partner for app and web development."

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={"https://lunacreatives.se"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      {showPopup && <Popup data={data.popup} />}
      <Navbar data={data} />
      <Header data={data.header} />
      <ClientLogos logos={logos} />
      <CallToAction data={data.callToAction} />
      <Services data={data.services} />
      {icons && <Skills icons={icons} />}
      <CustomDivider hasBackgroundColor />
      <CustomerPromise data={data.customerPromise} />
      <CustomDivider />
      <Team data={team} headline={data.team.headline} />
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </>
  );
};
