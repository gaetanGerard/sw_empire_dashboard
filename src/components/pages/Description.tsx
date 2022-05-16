import React, { useState, useContext, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';

// Import Styles
import '../../styles/description.scss';

// Import types
import { WANTED } from '../../context/types';

// Import Components
import Header from '../ui/Header';
import Typography from '../ui/Typography';
import Button from '../ui/Button';

// Import Context
import { WantedContext } from '../../context/wanted/WantedProvider';

type Props = {}

const Description = (props: Props) => {
    const { wantedList, initializeWantedList, deleteWanted } = useContext(WantedContext);
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as { data: WANTED };

    useEffect(() => {
        if(wantedList === null) initializeWantedList(JSON.parse(localStorage.getItem('wantedList') || '[]'));
    }, [wantedList, initializeWantedList]);

    const onclick = () => {
        // function for delete Item
        deleteWanted(state.data.id);
        const wantedL = JSON.parse(localStorage.getItem('wantedList') || '[]');

        // function for update localStorage
        const newArr = wantedL.filter((item: any )=> item.id !== state.data.id);

        initializeWantedList(newArr);
        localStorage.setItem('wantedList', JSON.stringify(newArr));
        navigate("/home")
    }

  return (
    <div className="wanted-profile-detail-container">
        <Header />
        <div className="wanted-profile-detail">
            <div className="img-container">
                <img src={state.data.picture} alt={`Wanted ${state.data.name}`} className={state.data.status === "Dead" ? "grayscale" : ""} />
            </div>
            <div className="wanted-description-container">
                <div className="content-container">
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Name: </Typography>
                        <Typography HTMLElement="p">{state.data.name}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Type: </Typography>
                        <Typography HTMLElement="p">{state.data.type}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Profession: </Typography>
                        <Typography HTMLElement="p">{state.data.profession}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">{state.data.type === "Organic" ? "Species: " : "Droid: "}</Typography>
                        <Typography HTMLElement="p">{state.data.type === "Organic" ? state.data.species : state.data.droid}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Status: </Typography>
                        <Typography HTMLElement="p">{state.data.status}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Threat Level: </Typography>
                        <Typography HTMLElement="p">{state.data.threat_level}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Last Known Location: </Typography>
                        <Typography HTMLElement="p">{state.data.last_known_location}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Crimes: </Typography>
                        <Typography HTMLElement="p">{state.data.crimes}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Wanted Condition: </Typography>
                        <Typography HTMLElement="p">{state.data.wanted_condition}</Typography>
                    </div>
                    <div className="text-container">
                        <Typography HTMLElement="p" className="bold">Bounty: </Typography>
                        <Typography HTMLElement="p" className="imperial_credit">{state.data.bounty} <img src={"/images/taka.png"} alt="Imperial Credit" /> </Typography>
                    </div>
                </div>
                <div className="btn-container">
                    <Link to="/wanted-profile-detail/edit" state={{ data: state.data}} className="btn-detail">Edit</Link>
                    {state.data.canBeDeleted ? <Button btnType='button' onClick={onclick} className="btn-detail btn-delete">Delete</Button> : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description