import { useEffect, useState } from 'react';
import axios from 'axios';

import { HeaderSection } from '../../components/HeaderSection';
import { InfoSection } from '../../components/InfoSection';
import { TeamSection } from '../../components/TeamSection';
import { constants } from '../../utils/data/constants';

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
      <HeaderSection />
      {!visible && (
        <>
          <InfoSection infoSection={constants.infoSection} />
          <TeamSection data={team} headline={'Vårt team'} />
        </>
      )}
    </>
  );
};
