import React from 'react';
import Monster from "./Monster";

interface IProps {
    monsters: {
        id: string
        name: string
        description?: string
        url: string
    }[]
}

const MonsterContainer: React.FC<IProps> = ({monsters}) => {

    const renderMonsterList = (): JSX.Element[] => {
        return monsters.map((singleMonster) => {
            return <Monster key={singleMonster.id} monster={singleMonster}/>
        })
    }

    return (
        <div className={`grid grid-cols-4`}>
            {renderMonsterList()}
        </div>
    );
};

export default MonsterContainer;
