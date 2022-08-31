import './Styles/ProfilePage.css';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const state = useSelector((state) => state);
  let rocketsReserved = 0;
  let missionJoined = 0;
  return (
    <section className="profile--info--container flex">
      <div className="rockets--booked--info">
        <h2>My Missions</h2>
        <table>
          <tbody>
            {
              state.rockets.map((rocket) => {
                if (rocket.isReserved) {
                  rocketsReserved += 1;
                  return (
                    <tr key={rocket.id}>
                      <td>{rocket.name}</td>
                    </tr>
                  );
                }
                return null;
              })
            }
            {
              !rocketsReserved
              && (
                <tr>
                  <td>No Rockets Reserved</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className="missions--joined--info">
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {
              state.missions.map((mission) => {
                if (mission.isjoined) {
                  missionJoined += 1;
                  return (
                    <tr key={mission.id}>
                      <td>{mission.name}</td>
                    </tr>
                  );
                }
                return null;
              })
            }
            {
              !missionJoined
              && (
                <tr>
                  <td>No Missions Joined</td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProfilePage;
