import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';


const BusinessAIHeader = () => {
    return (
        <div>
            <WrapperContainer>
                <Heading>The Digiflex.ai platform</Heading>
                <Subheading className='text-center'>
                    Empowering digital businesses with AI-driven solutions
                </Subheading>
                <Paragraph>
                    Help your team harness the power of AI for smarter decisions and efficient workflows. The Digiflex.ai platform streamlines your processes and enhances productivity by integrating advanced AI and automation across your business operations.
                </Paragraph>
            </WrapperContainer>
        </div>
    );
};

export default BusinessAIHeader;
