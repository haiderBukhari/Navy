import uniform3 from '../assets/3.png'
import { useState } from 'react';
import { badges, unform3Medals } from '../components/Uniform3Medals';

function Uniform1() {
    const [selectedMedals, setSelectedMedals] = useState([]);
    const [selectedMedalsIndex, setSelectedMedalsIndex] = useState([]);
    const [isMedalselected, setIsMedalSelected] = useState(false)
    const [selectedBadges, setSelectedBadges] = useState([]);
    const [selectedBadgesIndex, setSelectedBadgesIndex] = useState([]);
    const [isBadgesselected, setIsBadgesSelected] = useState(false)

    const selectItem = (id, image) => {
        const isPresent = selectedMedals.find(medal => medal.id === id);
        if (isPresent) {
            setSelectedMedals(selectedMedals.filter(medal => medal.id !== id));
            setSelectedMedalsIndex(selectedMedalsIndex.filter(index => index !== id));
        } else {
            setSelectedMedals([...selectedMedals, { image: image, id: id }])
            setSelectedMedalsIndex([...selectedMedalsIndex, id])
        }
    }

    const selectBadge = (id, image) => {
        const isPresent = selectedBadges.find(medal => medal.id === id);
        if (isPresent) {
            setSelectedBadges(selectedBadges.filter(medal => medal.id !== id));
            setSelectedBadgesIndex(selectedBadgesIndex.filter(index => index !== id));
        } else {
            setSelectedBadges([...selectedBadges, { image: image, id: id }])
            setSelectedBadgesIndex([...selectedBadgesIndex, id])
        }
    }
    return (
        <>
            <div className='flex'>
                <div className='relative'>
                    <img src={uniform3} className="logo max-w-[700px] h-[auto] ml-10" alt="Vite logo" />
                    {
                        selectedMedals.length >= 3 ? <div>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[30px] absolute top-[32%] right-[37%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[30px] absolute top-[32%] right-[32%]`} />
                            <img src={selectedMedals[2].image} alt="" className={`h-auto w-[30px] absolute top-[32%] right-[27%]`} />
                        </div>
                            : null
                    }
                    {
                        selectedMedals.length === 1 ? <img src={selectedMedals[0].image} alt="" className={`h-auto w-[30px] absolute top-[32%] right-[32%]`} /> : null
                    }
                    {
                        selectedMedals.length === 2 ? <>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[30px] absolute top-[32%] right-[35%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[30px] absolute top-[32%] right-[29%]`} />
                        </> : null
                    }

                    {
                        selectedBadges.length === 1 && <>
                            <img src={selectedBadges[0].image} alt="" className={`h-auto w-[30px] absolute top-[26%] left-[35%]`} />
                        </>
                    }
                    {
                        selectedBadges.length >= 2 && <>
                            <img src={selectedBadges[0].image} alt="" className={`h-auto w-[30px] absolute top-[26.3%] left-[35%]`} />
                            <img src={selectedBadges[1].image} alt="" className={`h-auto w-[30px] absolute top-[24%] left-[35%]`} />
                        </>
                    }
                    <div className='bg-black w-[60px] h-[8px] absolute top-[29.5%] left-[33%]'></div>
                </div>
                <div className='mr-5 flex justify-center w-full'>
                    {
                        !isMedalselected && !isBadgesselected && <>
                            <button onClick={() => setIsMedalSelected(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold'>Select Medals</button>
                            <button onClick={() => setIsBadgesSelected(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Badge</button>
                        </>
                    }
                    {isMedalselected &&
                        <div className='block self-center'>
                            <div className='flex flex-wrap'>
                                {
                                    unform3Medals.map((Item) => (
                                        <img style={{ border: `${selectedMedalsIndex.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => selectItem(Item.id, Item.image)} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.id} src={Item.image} alt="" />
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={() => { setIsMedalSelected(false) }} className='px-10 py-2 bg-blue-500 mx-auto rounded-sm mt-5 h-11 text-white font-semibold'>Go Back</button>
                            </div>
                        </div>
                    }

                    {isBadgesselected &&
                        <div className='block self-center'>
                            <div className='flex flex-wrap'>
                                {
                                    badges.map((Item) => (
                                        <img style={{ border: `${selectedBadgesIndex.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => selectBadge(Item.id, Item.image)} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.id} src={Item.image} alt="" />
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={() => { setIsBadgesSelected(false) }} className='px-10 py-2 bg-blue-500 mx-auto rounded-sm mt-5 h-11 text-white font-semibold'>Go Back</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Uniform1