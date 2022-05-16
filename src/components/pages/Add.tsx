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
import folderLength from '../../data/foldersLength.json';

type Props = {}

const Add: FC = (props: Props): JSX.Element => {
    const location = useLocation();
    const params = useParams();
    const state = location.state as { data: WANTED };
    const [noImg, setNoImg] = useState('/images/no_image.png');
    const [wantedName, setWantedName] = useState<string|null>(params.action === "edit" ? state.data.name : null);
    const [type, setType] = useState<string>(params.action === "edit" ? state.data.type : 'Organic');
    const [profession, setProfession] = useState<string>(params.action === "edit" ? state.data.profession : '');
    const [species, setSpecies] = useState<string|null>(params.action === "edit" ? state.data.species : null);
    const [droid, setDroid] = useState<string|null>(params.action === "edit" ? state.data.droid : null);
    const [status, setStatus] = useState<string>(params.action === "edit" ? state.data.status : '');
    const [threatLevel, setThreatLevel] = useState<string>(params.action === "edit" ? state.data.threat_level : '');
    const [lastKnownLocation, setLastKnownLocation] = useState<string>(params.action === "edit" ? state.data.last_known_location : '');
    const [crimes, setCrimes] = useState<string>(params.action === "edit" ? state.data.crimes : '');
    const [wantedCondition, setWantedCondition] = useState<string>(params.action === "edit" ? state.data.wanted_condition : '');
    const [bounty, setBounty] = useState<string>(params.action === "edit" ? state.data.bounty : '');
    const [pictureFromDBBool, setPictureFromDBBool] = useState<boolean>(false);

    const [speciesList, setSpeciesList] = useState<any>([]);


    // console.log(params.action)
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
        // console.log(data);
    }


    useEffect(() => {
        if(profession) {
            // console.log(profession)
            setSpeciesList(data[profession as keyof typeof data]);
            // console.log(folderLength[profession as keyof typeof folderLength]);
        }
        if(type === 'Droid') {
            setSpeciesList(data["droid" as keyof typeof data]);
        }

        // console.log(folderLength);


        if(params.action === "add" && pictureFromDBBool === true) {
            if(type === "Organic" && species && profession) {
                const lengthNum = (folderLength as any)[profession][species]
                const randNum = Math.floor(Math.random() * lengthNum);
                console.log(randNum);
            }
        }

    }, [type, profession, params.action, species, droid, pictureFromDBBool]);

    // console.log(species)

  return (
    <div className="wanted-profile-detail-container">
    <Header />
    <div className="wanted-profile-detail">
        <div className="img-container add-edit-wanted">
            <img src={params.action === "edit" ? state.data.picture : noImg} alt={"Placeholder"} />
            {params.action === "edit" ? null : (<label className="checkbox-container">Use Picture from Database ?
                <input type="checkbox" onChange={(e) => setPictureFromDBBool(e.target.checked)} name="pictureFromDB" />
                <span className="checkmark"></span>
            </label>)}
            <div className="btn-container">
                <Button btnType="button" className="btn-detail" onClick={onclick}>{params.action === "edit" ? "Edit" : "Add"}</Button>
                <Link to="/home" className="btn-cancel">Cancel</Link>
            </div>
        </div>
        <div className="wanted-description-container add-edit-form">
            <div className="content-container">
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Name: </Typography>
                    <InputText fieldName="add-edit-name" type="text" name="name" onChange={onChange} value={wantedName} />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Type: </Typography>
                    <div className="custom-select">
                        <Select options={["Organic", "Droid"]} name="type" selected={type} onChange={onChange} />
                    </div>
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Profession: </Typography>
                    {type === "Organic" ? (<div className="custom-select">
                        <Select options={["criminal", "jedi", "sith"]} name="profession" selected={profession} onChange={onChange} />
                    </div>) : <Typography HTMLElement="p">Droid</Typography>}
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">{type === "Organic" ? "Species" : "Droid"} :</Typography>
                    <div className="custom-select">
                        <Select options={speciesList} name={type === "Organic" ? "Species" : "Droid"} selected={species ? species : droid} onChange={onChange} />
                    </div>
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Status: </Typography>
                    <InputText fieldName="add-edit-status" type="text" name="status" onChange={onChange} value={status}/>
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Threat Level: </Typography>
                    <InputText fieldName="add-edit-threat-level" type="text" name="threat_level" onChange={onChange} value={threatLevel} />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Last Known Location: </Typography>
                    <InputText fieldName="add-edit-last-known-location" type="text" name="last_known_location" onChange={onChange} value={lastKnownLocation}/>
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Crimes: </Typography>
                    <InputText fieldName="add-edit-crimes" type="text" name="crimes" onChange={onChange} value={crimes} />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Wanted Condition: </Typography>
                    <InputText fieldName="add-edit-wanted-condition" type="text" name="wanted_condition" onChange={onChange} value={wantedCondition} />
                </div>
                <div className="text-container">
                    <Typography HTMLElement="p" className="bold">Bounty (Number): </Typography>
                    <InputText fieldName="add-edit-bounty" type="text" name="bounty" onChange={onChange} value={bounty} />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Add