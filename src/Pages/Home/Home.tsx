import { type FC } from 'react';
import './Home.scss';
import NavigationBar from '../../Common/Components/Navigation/NavigationBar';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HomeProps {};

const Home: FC<HomeProps> = () => {
    return (
        <div className="home-container">
            <NavigationBar />
        </div>
    );
};

export default Home;