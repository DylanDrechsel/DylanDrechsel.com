import './StartMenu.scss';
import RollingCubeAnimation from './RollingCubeAnimation/RollingCubeAnimation';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface StartMenuProps {};

const StartMenu: StartMenuProps = () => {
    return (
        <>
            <RollingCubeAnimation />
        </>
    );
};

export default StartMenu;