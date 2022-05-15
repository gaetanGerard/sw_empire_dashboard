import React, { ChangeEvent, useState, useEffect, FC } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

// Import Types
import { WANTED } from '../../context/types';

// Import Components
import InputText from '../ui/InputText';
import Header from '../ui/Header';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import Select from '../ui/Select';


// Import Styles
import '../../styles/add.scss';
import '../../styles/checkbox.scss';

// Import data
import data from '../../data/species.json';

type Props = {}

const Add: FC = (props: Props): JSX.Element => {
    const location = useLocation();
    const params = useParams();
    const state = location.state as { data: WANTED };
    const [noImg, setNoImg] = useState('/images/no_image.png');
    const [wantedName, setWantedName] = useState<string|null>(null);
    const [type, setType] = useState<string>('Organic');
    const [profession, setProfession] = useState<string>('');
    const [species, setSpecies] = useState<string|null>(null);
    const [droid, setDroid] = useState<string|null>(null);
    const [status, setStatus] = useState<string>('');
    const [threatLevel, setThreatLevel] = useState<string>('');
    const [lastKnownLocation, setLastKnownLocation] = useState<string>('');
    const [crimes, setCrimes] = useState<string>('');
    const [wantedCondition, setWantedCondition] = useState<string>('');
    const [bounty, setBounty] = useState<string>('');

    const [speciesList, setSpeciesList] = useState<string[]>([]);


    // console.log(params)
    // console.log(state.data)

    const onChange = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        if(e.target.name === 'name') setWantedName(e.target.value);
        if(e.target.name === 'type') setType(e.target.value);
        if(e.target.name === 'profession') setProfession(e.target.value);
        if(e.target.name === 'Species') setSpecies(e.target.value);
        if(e.target.name === 'Droid') setDroid(e.target.value);
        if(e.target.name === 'status') setStatus(e.target.value);
        if(e.target.name === 'threat_level') setThreatLevel(e.target.value);
        if(e.target.name === 'last_known_location') setLastKnownLocation(e.target.value);
        if(e.target.name === 'crimes') setCrimes(e.target.value);
        if(e.target.name === 'wanted_condition') setWantedCondition(e.target.value);
        if(e.target.name === 'bounty') setBounty(e.target.value);
      }


    const onclick = () => {
        const data = {
            name: wantedName,
            type: type,
            profession: profession,
            species: species,
            droid: droid,
            status: status,
            threat_level: threatLevel,
            last_known_location: lastKnownLocation,
            crimes: crimes,
            wanted_condition: wantedCondition,
            bounty: bounty,
            picture: noImg,
            canBeDeleted: true
        }

        console.log(data);
    }


    useEffect(() => {
        setSpeciesList(data.species[type as keyof typeof data.species]);
    }, [type, speciesList, wantedName])


    // console.log(droid);
    // console.log(species)

  return (
    <div className="wanted-profile-detail-container">
    <Header />
    <div className="wanted-profile-detail">
        <div className="img-container add-edit-wanted">
            <img src={noImg} alt={"Placeholder"} />
            <label className="checkbox-container">Use Picture from Database ?
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <div className="btn-container">
                <Button btnType="button" className="btn-detail" onClick={onclick}>Add</Button>
                <Link to="/home" className="btn-cancel">Cancel</Link>
            </div>
        </div>
        <div className="wanted-description-container add-edit-form">
            <div className="content-container">
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Name: </Typography>
                    <InputText fieldName="add-edit-name" type="text" name="name" onChange={onChange} label="Name" errorMsg="" />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Type: </Typography>
                    <div className="custom-select">
                        <Select options={["Organic", "Droid"]} name="type" selected={type} onChange={onChange} />
                    </div>
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Profession: </Typography>
                    <InputText fieldName="add-edit-profession" type="text" name="profession" onChange={onChange} label="Profession" errorMsg="" />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">{type === "Organic" ? "Species" : "Droid"} :</Typography>
                    <div className="custom-select">
                        <Select options={speciesList} name={type === "Organic" ? "Species" : "Droid"} selected={type} onChange={onChange} />
                    </div>
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Status: </Typography>
                    <InputText fieldName="add-edit-status" type="text" name="status" onChange={onChange} label="Status" />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Threat Level: </Typography>
                    <InputText fieldName="add-edit-threat-level" type="text" name="threat_level" onChange={onChange} label="Threat Level" />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Last Known Location: </Typography>
                    <InputText fieldName="add-edit-last-known-location" type="text" name="last_known_location" onChange={onChange} label="Last Location" />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Crimes: </Typography>
                    <InputText fieldName="add-edit-crimes" type="text" name="crimes" onChange={onChange} label="Crimes" />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Wanted Condition: </Typography>
                    <InputText fieldName="add-edit-wanted-condition" type="text" name="wanted_condition" onChange={onChange} label="Wanted Condition" />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Bounty (Number): </Typography>
                    <InputText fieldName="add-edit-bounty" type="text" name="bounty" onChange={onChange} label="Bounty" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Add