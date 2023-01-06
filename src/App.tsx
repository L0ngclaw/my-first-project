import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import MonsterContainer from "./Components/MonsterContainer";

interface IState {
    monsters: {
        id: string
        name: string
        description?: string
        url: string,
    }[]
}

const monstersArray = [
    {
        id: uuidv4(),
        name: 'Bob',
        description: 'This is a good bald man',
        url: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Dizzy&eyebrowType=SadConcernedNatural&mouthType=Twinkle&skinColor=Brown'
    },
    {
        id: uuidv4(),
        name: 'Jake',
        description: 'This is a Hat Man',
        url: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Pizza&eyeType=Side&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Yellow'
    },
    {
        id: uuidv4(),
        name: 'Finn',
        description: 'This is a Adventure Man',
        url: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription01&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light'
    }


]

fetch('https://jsonplaceholder.typicode.com/users').then(response => {response.json().then(users => console.log(users))})

const App = () => {
    const [monsters, setMonsters] = useState<IState['monsters']>([]);
    const [monsterSearch, setMonsterSearch] = useState<string>('');

    const searchMonsterHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setMonsters((prev) => {
            return (
                monstersArray.filter((Monster) => Monster.name.toString().toLowerCase().trim().includes(event.target.value.toString().toLowerCase().trim()))
            )
        })
        setMonsterSearch(event.target.value)
    }


    return (
        <div>
            <input className={`border-2 border-gray-400`} type="text" onChange={searchMonsterHandler}
                   value={monsterSearch}/>

            {monsterSearch.toString().trim().toString() ? <MonsterContainer monsters={monsters}/> :
                <MonsterContainer monsters={monstersArray}/>}
        </div>
    );
};

export default App;
