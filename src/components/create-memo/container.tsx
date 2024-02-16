'use client';

import CreateMemo from '.';
import { useSearchParams } from 'next/navigation';
import EditMemo from '../edit-memo';
import { AnimatePresence, Variant, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function WriteMemoContainer() {
    const searchParams = useSearchParams();

    const [isOn, setIsOn] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);

    console.log(isOn);
    useEffect(() => {
        if (searchParams.get('write') === 'on') {
            setIsOn(true);
        } else setIsOn(false);
    }, [searchParams.get('write')]);

    useEffect(() => {
        if (searchParams.get('edit') !== null) {
            setEditId(searchParams.get('edit'));
        } else {
            setEditId(null);
        }
    }, [searchParams.get('edit')]);

    return (
        <>
            <AnimatePresence>
                {isOn && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: '100vh' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100vh' }}
                        transition={{ duration: 0.2, type: 'just' }}
                        className="fixed left-0 top-0 z-[10] h-[100vh] w-full bg-[#f5f5f5]"
                    >
                        <div className="mx-auto h-full w-[400px] bg-white">
                            <CreateMemo />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {editId !== null && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: '100vh' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100vh' }}
                        transition={{ type: 'just' }}
                        className="fixed left-0 top-0 z-[10] h-[100vh] w-full bg-[#f5f5f5]"
                    >
                        <div className="mx-auto h-full w-[400px] bg-white">
                            <EditMemo id={Number(editId)} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
