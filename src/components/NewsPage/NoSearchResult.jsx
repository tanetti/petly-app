// import { Container } from 'components/Shared/ContainerStyled';
import { NoNews, NoNewsImg} from '../../pages/NewsPage/NewsPageStyled';
import sadBoy from '../../images/sad.png'

export const NoSearchResult = () => (
    <>
        <>
            <NoNews>
            No any articles for your query
            </NoNews>
            <NoNewsImg>
            <img src={sadBoy} alt={'boy'}></img>
            </NoNewsImg>
            
            
        </>
    </>
);