'use client';

import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { PencilIcon, TrashIcon } from 'lucide-react';
import MeatballIcon from '@/assets/icons/meatball_20x20.svg';

export default function ActionButton() {
    return (
        <Popover modal>
            <PopoverTrigger className="p-3">
                <MeatballIcon />
            </PopoverTrigger>
            <PopoverContent className="mr-[10px] w-fit rounded-[8px] border-none bg-[#fff] p-3 shadow-lg">
                <ul>
                    <li>
                        <button className="flex items-center gap-1">
                            <PencilIcon stroke="#4B4F58" />
                            <span className="text-semibold16 text-gray-600">기록 수정</span>
                        </button>
                    </li>
                    <div className="mx-[-12px] my-1 h-[1px] bg-gray-200" />
                    <li>
                        <button className="flex items-center gap-1">
                            <TrashIcon stroke="#F04141" />
                            <span className="text-semibold16 text-[#F04141]">기록 삭제</span>
                        </button>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    );
}