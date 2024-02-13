import { Keywords } from '@/constants/character-info';
import { Character } from '@/types/character';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
    className?: string;
    character: Character;
};

export default function CharacterDetail({ className, character }: Props) {
    const { name, keywords, characterImage, currentExp, nextExp, level } = character;

    return (
        <div className={twMerge('flex h-auto w-full flex-col items-center', className)}>
            <h3 className="text-H1 text-black">{name}</h3>
            <ul className="mt-[6px] flex gap-[4px]">
                {keywords.map((keywordIdx) => (
                    <li
                        className="rounded-[8px] bg-[#E0ECFF] px-[12px] py-[4px] text-[12px] font-[500] text-primary-500"
                        key={keywordIdx}
                    >
                        {Keywords[keywordIdx].name}
                    </li>
                ))}
            </ul>
            <Image alt="캐릭터 이미지" src={characterImage} width={328} height={299} />
            <div className="mt-[20px] flex h-[56px] w-[327px] items-center justify-center gap-[20px] rounded-[16px] bg-white">
                <span className="text-[16px] font-bold text-primary-500">{`LV.${level}`}</span>
                <div className="relative h-[24px] w-[233px] rounded-full bg-newGray-400">
                    <div
                        style={{ width: `${(currentExp / nextExp) * 100}%` }}
                        className={`absolute left-0 top-0 h-full rounded-full bg-primary-500 `}
                    />
                    <div className="absolute right-[14.4px] my-auto flex h-full items-center">
                        <span className="text-[12px] font-semibold text-white">{`${currentExp}/${nextExp}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}