import { ModeToggle } from "./ui/ThemeTogglebtn";
import { Button } from "./ui/button";
import {FiFeather} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="p-8 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <FiFeather className='text-2xl' />
        <h1 className="text-xl font-bold">
          Mad
          <span className="text-blue-600">Notes</span>.
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Button variant={'outline'} size={'sm'}>Log In</Button>
        <Button size={'sm'}>Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;
