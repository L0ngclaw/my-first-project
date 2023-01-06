import React from 'react';

interface IProps {
    monster: {
        id: string
        name: string
        description?: string
        url: string,
    }
}

const Monster: React.FC<IProps> = ({monster}) => {
    return (

        <div className="flex justify-center py-8 sm:px-6 px-4">
            <div className="max-w-sm w-full relative rounded shadow bg-white dark:bg-gray-800 grid place-content-center text-center">
                <img src={monster.url} alt={`monster`}/>
                <div className="py-6 px-6 flex md:items-center justify-between">
                    <div>
                        <p className="sm:text-lg text-base font-semibold leading-5 text-gray-800 dark:text-gray-100">{monster.name}</p>
                        <p className="sm:text-base text-sm leading-4 pt-3 text-gray-500 dark:text-gray-400">{monster.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Monster;
