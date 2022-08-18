import { useEffect, useState } from 'react';
import axios from 'axios';

import { HeaderSection } from '../../components/HeaderSection';
import { InfoSection } from '../../components/InfoSection';
import { TeamSection } from '../../components/TeamSection';
import { ClientSection } from '../../components/ClientSection';
import { constants } from '../../utils/data/constants';
import { Footer } from '../../components/Footer';
import { SkillsSection } from '../../components/SkillsSection';

export const HomePage = () => {
  const [showHeader, setShowHeader] = useState(true);
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
      setShowHeader(false);
    }, 7000);

    fetchAndSetUsers();
  }, []);

  return (
    <>
      <HeaderSection />
      {!showHeader && (
        <>
          <InfoSection headline={constants.infoSection.headline} />
          <ClientSection />
          <TeamSection data={team} headline={constants.teamSection.headline} />
          <SkillsSection skillsSection={constants.skillsSection} />
          <Footer
            emailAddress={constants.footerSection.emailAddress}
            heading={constants.footerSection.heading}
            location={constants.footerSection.location}
            phoneNumber={constants.footerSection.phoneNumber}
          />
        </>
      )}
    </>
  );
};
