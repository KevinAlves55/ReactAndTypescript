import { useCallback, useState } from "react";

interface IListItem { 
    title: string; 
    isSelected: boolean;
}

export const Dashboard = () => {

    const [lista, setLista] = useState<IListItem[]>([]);

    const handleInputKeyDow: React.KeyboardEventHandler<HTMLInputElement>  = useCallback((e) => {
        
        if (e.key === "Enter") {

            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = "";

            setLista((oldLista) => {
                
                if (oldLista.some(({ title }) => title === value)) return oldLista;

                return [...oldLista, {
                    title: value,
                    isSelected: false 
                }];

            });

        }

    }, []);

    return(
        <div>
            <p>Lista</p>

            <input 
                type="text" 
                onKeyDown={handleInputKeyDow}
            />

            <p>{lista.filter(({isSelected}) => isSelected).length}</p>

            <ul>
                {lista.map(({ title, isSelected }, index) => {
                    return <li key={index}>
                        <input 
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {
                                setLista((oldLista) => {
                                    return oldLista.map((ListItem) => {
                                        if (ListItem.title === title) {
                                            return {
                                                ...ListItem,
                                                isSelected: !ListItem.isSelected
                                            }
                                        }
                                        return ListItem;
                                    });
                                });
                            }}
                        />
                        {title}
                    </li>
                })}
            </ul>

        </div>
    );

}