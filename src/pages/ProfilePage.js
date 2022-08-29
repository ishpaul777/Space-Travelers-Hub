import './Styles/ProfilePage.css';

const ProfilePage = () => (
  <section className="profile--info--container flex">
    <div className="missions--joined--info">
      <h2>My Missions</h2>
      <table>
        <tr>
          <td>Random 1</td>
        </tr>
        <tr>
          <td>Random 2</td>
        </tr>
        <tr>
          <td>Random 3</td>
        </tr>
        <tr>
          <td>Random 4</td>
        </tr>
      </table>
    </div>
    <div className="rockets--booked--info">
      <h2>My Rockets</h2>
      <table>
        <tr>
          <td>Random 1</td>
        </tr>
        <tr>
          <td>Random 2</td>
        </tr>
        <tr>
          <td>Random 3</td>
        </tr>
      </table>
    </div>
  </section>
);

export default ProfilePage;
