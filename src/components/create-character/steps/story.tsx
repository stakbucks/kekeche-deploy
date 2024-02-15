'use client';

import HomeBg from '@/assets/images/homeBg.jpg';
import CtaButton from '@/components/ui/cta-button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import FixedBottomArea from '../fixed-bottom-area';
import Header from '../header';
import useCarousel from '../hooks/useCarousel';
import StoryBox from '../story-box';

export default React.memo(function Story() {
    const router = useRouter();

    const { handleNextClick } = useCarousel();

    const [storyNum, setStoryNum] = useState<1 | 2>(1);

    return (
        <>
            <Image quality={100} alt={'홈 배경'} src={HomeBg} fill />
            <Header
                onGoBack={() => {
                    router.push('/');
                }}
                withText={false}
            />
            {storyNum === 1 ? (
                <FixedBottomArea className="mb-[31px] gap-[16px]">
                    <StoryBox text={'깊고 깊은 머릿속에는 \n 다양한 내가 살고 있어요.'} />
                    <CtaButton text="다음" onClick={() => setStoryNum(2)} />
                </FixedBottomArea>
            ) : (
                <FixedBottomArea className="mb-[31px] gap-[16px]">
                    <StoryBox text={'내 안의 다양한 공룡들을 키워서, 나의 공룡들과 \n 함께 다같이 레벨업해요.'} />
                    <CtaButton text="다음" onClick={handleNextClick} />
                </FixedBottomArea>
            )}
        </>
    );
});
