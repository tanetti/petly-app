import { Button } from "./LogoutStyled";
import {ReactComponent as Exit} from '../../svg/exit.svg';

export const Logout = () => {


    return(
        <Button type="button" aria-label="Exit">
        <Exit/>
        Log Out
        </Button>
    )  
};
  