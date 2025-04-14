import Benefits from './Benefits';
import MarketingFeatures from './MarketingFeatures';
import MarketingIntro from './MarketingIntro';
import MarketingProcess from './MarketingProcess';
import MarketingTools from './MarketingTools';
import Faq from '@/components/Faq';
import { MarketingCloudFAQData } from '../FAQData';
import WrapperContainer from '@/Layout/WrapperContainer';

const Body = () => {
    return (
        <>
            <MarketingIntro />
            <Benefits />
            <MarketingFeatures />
            <MarketingProcess />
            <MarketingTools />
            <Faq faqs={MarketingCloudFAQData} />
        </>
    );
};

export default Body;
