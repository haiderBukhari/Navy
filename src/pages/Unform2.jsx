import uniform3 from '../assets/5.png'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { unform3Medals1 } from '../components/Unform2Medals';
import { badges, unform3Medals } from '../components/Uniform3Medals';
import { belowTelle } from '../components/Uniform3Medals';
import { ranks } from '../components/ranks';
import { unform4Medals } from './../components/Uniform3Medals';
import flag from '../assets/flag.png'

function Uniform2() {
    const [selectedMedals, setSelectedMedals] = useState([]);
    const [selectedMedalsIndex, setSelectedMedalsIndex] = useState([]);
    const [isMedalselected, setIsMedalSelected] = useState(false)
    const [open, setOpen] = useState(false)

    const [selectedInsignia, setSelectedInsignia] = useState({});
    const [isInsigniaselected, setIsInsigniaSelected] = useState(false)

    const [selectedTelle, setSelectedTelle] = useState({});
    const [isTelleselected, setIsTelleSelected] = useState(false)

    const [selectedBadges, setSelectedBadges] = useState([]);
    const [selectedBadgesIndex, setSelectedBadgesIndex] = useState([]);
    const [isBadgesselected, setIsBadgesSelected] = useState(false)

    const [selectedMedals1, setSelectedMedals1] = useState([]);
    const [selectedMedalsIndex1, setSelectedMedalsIndex1] = useState([]);
    const [isMedalselected1, setIsMedalSelected1] = useState(false)

    const [selectedRank, setSelectedRank] = useState({});
    const [selectedRankIndex, setSelectedRankIndex] = useState('');
    const [isRankelected, setIsRankSelected] = useState(false)

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

    const selectMedals = (id, image) => {
        const isPresent = selectedMedals1.find(medal => medal.id === id);
        if (isPresent) {
            setSelectedMedals1(selectedMedals1.filter(medal => medal.id !== id));
            setSelectedMedalsIndex1(selectedMedalsIndex1.filter(index => index !== id));
        } else {
            setSelectedMedals1([...selectedMedals1, { image: image, id: id }])
            setSelectedMedalsIndex1([...selectedMedalsIndex1, id])
        }
    }

    const selectBadge = (id, image) => {
        const isPresent = selectedBadges.find(medal => medal.id === id);

        if (isPresent) {
            // Remove the badge if it is already selected
            const updatedBadges = selectedBadges.filter(medal => medal.id !== id);
            const updatedIndexes = selectedBadgesIndex.filter(index => index !== id);

            setSelectedBadges(updatedBadges);
            setSelectedBadgesIndex(updatedIndexes);
        } else {
            let updatedBadges = [...selectedBadges, { image: image, id: id }];
            let updatedIndexes = [...selectedBadgesIndex, id];

            // Sort badges by id
            updatedBadges.sort((a, b) => a.id - b.id);
            updatedIndexes.sort((a, b) => a - b);

            // If there are more than 10 badges, handle the insertion
            if (updatedBadges.length > 2) {
                // If the new id is greater than the smallest id in the list
                if (id > updatedBadges[0].id) {
                    // Remove the smallest id badge
                    updatedBadges.shift();
                    updatedIndexes.shift();
                } else {
                    // Remove the newly added badge since it is not greater
                    updatedBadges.pop();
                    updatedIndexes.pop();
                }
            }

            setSelectedBadges(updatedBadges);
            setSelectedBadgesIndex(updatedIndexes);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsMedalSelected(false)
        setIsTelleSelected(false)
        setIsInsigniaSelected(false)
        setIsRankSelected(false)
        setIsMedalSelected1(false)
        setIsBadgesSelected(false)
        setIsTelleSelected(false)
    };

    return (
        <>
            <div className='flex'>
                <div className='relative'>
                    <img src={uniform3} className="logo max-w-[300px] h-[auto] ml-10" alt="Vite logo" />
                    {
                        selectedInsignia && <img src={selectedInsignia.image} alt="" className={`h-auto w-[27px] absolute top-[22.2%] right-[25%] `} />
                    }
                    {
                        selectedTelle && selectedTelle.id === 1 && <div>
                            <img src={selectedTelle.image1} alt="" className={`h-auto w-[17px] absolute top-[25.2%] left-[32%] `} />
                            <img src={selectedTelle.image2} alt="" className={`h-auto w-[17px] absolute top-[25.2%] left-[39%] `} />
                        </div>
                    }
                    {
                        selectedTelle && selectedTelle.id === 2 && <div>
                            <img src={selectedTelle.image1} alt="" className={`h-auto w-[10px] absolute top-[25.2%] left-[33%] `} />
                            <img src={selectedTelle.image2} alt="" className={`h-auto w-[10px] absolute top-[25.2%] left-[40%] `} />
                        </div>
                    }
                    {
                        selectedBadges.length >= 2 && <img src={flag} alt="" className={`h-auto w-[10px] absolute top-[21.1%] left-[36.2%] `} />
                    }
                    {
                        selectedBadges.length === 1 && <img src={flag} alt="" className={`h-auto w-[10px] absolute top-[22%] left-[36.2%] `} />
                    }
                    {
                        !selectedBadges.length && <img src={flag} alt="" className={`h-auto w-[10px] absolute top-[22.6%] left-[36.2%] `} />
                    }
                    {
                        selectedRank && <>
                            <img style={{ transform: "rotateX(72deg) rotateY(-29deg)" }} src={selectedRank.rightImage} alt="" className={`h-auto w-[67px] absolute top-[16.2%] left-[22%] scale-15`} />
                            <img style={{ transform: "rotateX(-72deg) rotateY(-29deg)" }} src={selectedRank.leftImage} alt="" className={`h-auto w-[67px] absolute top-[16.2%] left-[70%] scale-15`} />
                        </>
                    }
                    {
                        selectedMedals.length >= 8 ? <div>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[32%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[28.3%]`} />
                            <img src={selectedMedals[2].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[24.6%]`} />
                            <img src={selectedMedals[3].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[21.3%]`} />
                            <img src={selectedMedals[4].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[32%]`} />
                            <img src={selectedMedals[5].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[28.3%]`} />
                            <img src={selectedMedals[6].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[24.6%]`} />
                            <img src={selectedMedals[7].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[21.3%]`} />                     </div>
                            : null
                    }
                    {
                        selectedMedals.length === 7 ? <div>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[32%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[28.3%]`} />
                            <img src={selectedMedals[2].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[24%]`} />
                            <img src={selectedMedals[3].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[21%]`} />
                            <img src={selectedMedals[4].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[30%]`} />
                            <img src={selectedMedals[5].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[26.3%]`} />
                            <img src={selectedMedals[6].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[23%]`} />                        </div>
                            : null
                    }
                    {
                        selectedMedals.length === 6 ? <div>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[32%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[28.3%]`} />
                            <img src={selectedMedals[2].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[24%]`} />
                            <img src={selectedMedals[3].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[21%]`} />
                            <img src={selectedMedals[4].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[24.6%]`} />
                            <img src={selectedMedals[5].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[28%]`} />
                        </div>
                            : null
                    }
                    {
                        selectedMedals.length === 5 ? <div>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[32%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[28.3%]`} />
                            <img src={selectedMedals[2].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[24%]`} />
                            <img src={selectedMedals[3].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[21%]`} />
                            <img src={selectedMedals[4].image} alt="" className={`h-auto w-[11px] absolute top-[23.6%] right-[26%]`} />
                        </div>
                            : null
                    }
                    {
                        selectedMedals.length === 4 ? <div>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[32%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[28.3%]`} />
                            <img src={selectedMedals[2].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[24.6%]`} />
                            <img src={selectedMedals[3].image} alt="" className={`h-auto w-[11px] absolute top-[24%] right-[21.3%]`} />
                        </div>
                            : null
                    }
                    {
                        selectedMedals.length === 3 ? <div>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[16px] absolute top-[24%] right-[30.5%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[16px] absolute top-[24%] right-[25.3%]`} />
                            <img src={selectedMedals[2].image} alt="" className={`h-auto w-[16px] absolute top-[24%] right-[21%]`} />
                        </div>
                            : null
                    }
                    {
                        selectedMedals.length === 1 ? <img src={selectedMedals[0].image} alt="" className={`h-auto w-[20px] absolute top-[24%] right-[26%]`} /> : null
                    }
                    {
                        selectedMedals.length === 2 ? <>
                            <img src={selectedMedals[0].image} alt="" className={`h-auto w-[20px] absolute top-[24%] right-[22%]`} />
                            <img src={selectedMedals[1].image} alt="" className={`h-auto w-[20px] absolute top-[24%] right-[28%]`} />
                        </> : null
                    }
                    {
                        selectedMedals1.length === 1 ? <img src={selectedMedals1[0].image} alt="" className={`h-auto w-[12px] absolute top-[25%] right-[26.6%]`} /> : null
                    }
                    {
                        selectedMedals1.length >= 2 ? <>
                            <img src={selectedMedals1[0].image} alt="" className={`h-auto w-[12px] absolute top-[25%] right-[30%]`} />
                            <img src={selectedMedals1[1].image} alt="" className={`h-auto w-[12px] absolute top-[25%] right-[22%]`} />
                        </> : null
                    }

                    {
                        selectedBadges.length === 1 && <>
                            <img src={selectedBadges[0].image} alt="" className={`h-auto w-[15px] absolute top-[23.1%] left-[35%]`} />
                        </>
                    }
                    {
                        selectedBadges.length >= 2 && <>
                            <img src={selectedBadges[1].image} alt="" className={`h-auto w-[15px] absolute top-[22.1%] left-[35%]`} />
                            <img src={selectedBadges[0].image} alt="" className={`h-auto w-[15px] absolute top-[23.1%] left-[35%]`} />
                        </>
                    }
                    <div className='bg-black w-[16px] h-[4.5px] absolute top-[24%] left-[34.6%]'></div>
                </div>
                <div className='mr-5 hidden md:flex justify-center w-full'>
                    {
                        !isMedalselected && !isBadgesselected && !isMedalselected1 && !isTelleselected && !isInsigniaselected && !isRankelected && <>
                            <button onClick={() => setIsMedalSelected(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold'>Select Medals</button>
                            <button onClick={() => setIsMedalSelected1(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 ml-3 h-9 text-white font-semibold'>Select Medals 1</button>
                            <button onClick={() => setIsBadgesSelected(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Badge</button>
                            <button onClick={() => setIsInsigniaSelected(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Insignia</button>
                            <button onClick={() => setIsTelleSelected(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Badge2</button>
                            <button onClick={() => setIsRankSelected(true)} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Rank</button>
                        </>
                    }
                    {isRankelected &&
                        <div className='block self-center'>
                            <div className='flex flex-wrap ml-4'>
                                {
                                    ranks.map((Item) => (
                                        <div key={Item.rightImage} onClick={() => setSelectedRank(Item)} className='m-2' style={{ border: "1px solid #ccc" }}>
                                            <img style={{ border: `${selectedMedalsIndex1.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.rightImage} src={Item.rightImage} alt="" />
                                            <p className='text-center my-2'>{Item.text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={() => { setIsRankSelected(false) }} className='px-10 py-2 bg-blue-500 mx-auto rounded-sm mt-5 h-11 text-white font-semibold'>Go Back</button>
                            </div>
                        </div>
                    }
                    {isTelleselected &&
                        <div className='block self-center'>
                            <div className='flex flex-wrap ml-4'>
                                {
                                    belowTelle.map((Item) => (
                                        <div key={Item.image1} style={{ border: `${selectedTelle.id === Item.id ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => {
                                            if (selectedTelle.id === Item.id) {
                                                setSelectedTelle({})
                                            } else {
                                                setSelectedTelle(Item)
                                            }
                                        }} className='m-2 flex' >
                                            <img loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.image1} src={Item.image1} alt="" />
                                            <img loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.image2} src={Item.image2} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={() => { setIsTelleSelected(false) }} className='px-10 py-2 bg-blue-500 mx-auto rounded-sm mt-5 h-11 text-white font-semibold'>Go Back</button>
                            </div>
                        </div>
                    }
                    {isInsigniaselected &&
                        <div className='block self-center'>
                            <div className='flex flex-wrap ml-4'>
                                {
                                    unform4Medals.map((Item) => (
                                        // <div key={Item.image} onClick={() => setSelectedInsignia(Item)} className='m-2' style={{border: "1px solid #ccc"}}>
                                        <img style={{ border: `${selectedInsignia.id === Item.id ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} loading='lazy' onClick={() => {
                                            if (selectedInsignia.id === Item.id) {
                                                setSelectedInsignia({})
                                            } else {
                                                setSelectedInsignia(Item)
                                            }
                                        }} className='w-[auto] h-[40px] m-5' key={Item.image} src={Item.image} alt="" />
                                        // </div>
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={() => { setIsInsigniaSelected(false) }} className='px-10 py-2 bg-blue-500 mx-auto rounded-sm mt-5 h-11 text-white font-semibold'>Go Back</button>
                            </div>
                        </div>
                    }
                    {isMedalselected &&
                        <div className='block self-center'>
                            <div className='flex flex-wrap'>
                                {
                                    unform3Medals1.map((Item) => (
                                        <img style={{ border: `${selectedMedalsIndex.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => selectItem(Item.id, Item.image)} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.id} src={Item.image} alt="" />
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={() => { setIsMedalSelected(false) }} className='px-10 py-2 bg-blue-500 mx-auto rounded-sm mt-5 h-11 text-white font-semibold'>Go Back</button>
                            </div>
                        </div>
                    }
                    {isMedalselected1 &&
                        <div className='block self-center'>
                            <div className='flex flex-wrap'>
                                {
                                    unform3Medals.map((Item) => (
                                        <img style={{ border: `${selectedMedalsIndex1.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => selectMedals(Item.id, Item.image)} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.id} src={Item.image} alt="" />
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={() => { setIsMedalSelected1(false) }} className='px-10 py-2 bg-blue-500 mx-auto rounded-sm mt-5 h-11 text-white font-semibold'>Go Back</button>
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
                <div className='h-full'>
                    {
                        !isMedalselected && !isBadgesselected && !isMedalselected1 && !isTelleselected && !isInsigniaselected && !isRankelected && <div className='fixed md:hidden top-[71vh] pb-10 left-0 bg-white z-20 flex justify-center flex-wrap rounded-2xl border-2 border-t-gray-400'>
                            <button onClick={() => { setIsMedalSelected(true); setOpen(!open) }} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold'>Select Medals</button>
                            <button onClick={() => { setIsMedalSelected1(true); setOpen(!open) }} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 ml-3 h-9 text-white font-semibold'>Select Medals 1</button>
                            <button onClick={() => { setIsBadgesSelected(true); setOpen(!open) }} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Badge</button>
                            <button onClick={() => { setIsInsigniaSelected(true); setOpen(!open) }} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Insignia</button>
                            <button onClick={() => { setIsTelleSelected(true); setOpen(!open) }} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Badge2</button>
                            <button onClick={() => { setIsRankSelected(true); setOpen(!open) }} className='px-5 py-2 bg-blue-500 rounded-sm mt-5 h-9 text-white font-semibold ml-4'>Select Rank</button>
                        </div>
                    }
                    {isRankelected &&
                        <React.Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Select The Rank from Below?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Select All the Image from below and it will automatically apply to your uniform.
                                    </DialogContentText>
                                    <div className='block self-center'>
                                        <div className='flex mt-4 flex-wrap ml-4'>
                                            {
                                                ranks.map((Item) => (
                                                    <div key={Item.rightImage} onClick={() => { setSelectedRank(Item); setSelectedRankIndex(Item.text) }} className='m-2' style={{ border: "1px solid #ccc" }}>
                                                        <img style={{ border: `${selectedRankIndex === Item.text ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.rightImage} src={Item.rightImage} alt="" />
                                                        <p className='text-center my-2'>{Item.text}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Apply
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    }
                    {isTelleselected &&
                        <React.Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Select The Telle from Below?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Select All the Image from below and it will automatically apply to your uniform.
                                    </DialogContentText>
                                    <div className='block self-center'>
                                        <div className='flex flex-wrap ml-4'>
                                            {
                                                belowTelle.map((Item) => (
                                                    <div key={Item.image1} style={{ border: `${selectedTelle.id === Item.id ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => {
                                                        if (selectedTelle.id === Item.id) {
                                                            setSelectedTelle({})
                                                        } else {
                                                            setSelectedTelle(Item)
                                                        }
                                                    }} className='m-2 flex' >
                                                        {
                                                            Item.id === 1 ? <>
                                                                <img loading='lazy' className='w-[auto] h-[20px] m-5 mb-2' key={Item.image1} src={Item.image1} alt="" />
                                                                <img loading='lazy' className='w-[auto] h-[20px] m-5 mb-2' key={Item.image2} src={Item.image2} alt="" />
                                                            </> : <>
                                                                <img loading='lazy' className='w-[auto] h-[40px] m-5 ml-6' key={Item.image1} src={Item.image1} alt="" />
                                                                <img loading='lazy' className='w-[auto] h-[40px] m-5 ml-9' key={Item.image2} src={Item.image2} alt="" /></>
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Apply
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    }
                    {isInsigniaselected &&
                        <React.Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Select The Insignia from Below?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Select All the Image from below and it will automatically apply to your uniform.
                                    </DialogContentText>
                                    <div className='block self-center'>
                                        <div className='flex flex-col h-auto w-[100px] flex-wrap ml-4'>
                                            {
                                                unform4Medals.map((Item) => (
                                                    <img style={{ border: `${selectedInsignia.id === Item.id ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} loading='lazy' onClick={() => {
                                                        if (selectedInsignia.id === Item.id) {
                                                            setSelectedInsignia({})
                                                        } else {
                                                            setSelectedInsignia(Item)
                                                        }
                                                    }} className='w-[auto] h-[40px] m-5' key={Item.image} src={Item.image} alt="" />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Apply
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    }
                    {isMedalselected &&
                        <React.Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Select The Ranks from Below?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Select All the Image from below and it will automatically apply to your uniform.
                                    </DialogContentText>
                                    <div className='block self-center'>
                                        <div className='flex flex-wrap'>
                                            {
                                                unform3Medals1.map((Item) => (
                                                    <img style={{ border: `${selectedMedalsIndex.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => selectItem(Item.id, Item.image)} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.id} src={Item.image} alt="" />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Apply
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    }
                    {isMedalselected1 &&
                        <React.Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Select The Medals from Below?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Select All the Image from below and it will automatically apply to your uniform.
                                    </DialogContentText>
                                    <div className='block self-center'>
                                        <div className='flex flex-wrap'>
                                            {
                                                unform3Medals.map((Item) => (
                                                    <img style={{ border: `${selectedMedalsIndex1.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => selectMedals(Item.id, Item.image)} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.id} src={Item.image} alt="" />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Apply
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    }
                    {isBadgesselected &&
                        <React.Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Select The Medals from Below?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Select All the Image from below and it will automatically apply to your uniform.
                                    </DialogContentText>


                                    <div className='block self-center'>
                                        <div className='flex flex-wrap'>
                                            {
                                                badges.map((Item) => (
                                                    <img style={{ border: `${selectedBadgesIndex.includes(Item.id) ? "2px solid #ccc" : ""}`, padding: "2px 3px" }} onClick={() => selectBadge(Item.id, Item.image)} loading='lazy' className='w-[auto] h-[40px] m-5' key={Item.id} src={Item.image} alt="" />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Apply
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    }
                </div>
            </div>
        </>
    )
}
export default Uniform2