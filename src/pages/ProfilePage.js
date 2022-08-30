import './Styles/ProfilePage.css';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const rockets = useSelector((state) => state.rockets);
  let rocketsReserved = 0;
  return (
    <section className="profile--info--container flex">
      <div className="rockets--booked--info">
        <h2>My Missions</h2>
        <table>
          <tbody>
            {
              rockets.map((rocket) => {
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
            <tr>
              <td>Random 1</td>
            </tr>
            <tr>
              <td>Random 2</td>
            </tr>
            <tr>
              <td>Random 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProfilePage;
