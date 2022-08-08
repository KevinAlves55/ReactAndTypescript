import { useCallback, useState } from "react";

interface IListItem { 
    id: number;
    title: string; 
    isComplete: boolean;
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
                    id: oldLista.length,
                    title: value,
                    isComplete: false 
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

            <p>{lista.filter(({isComplete}) => isComplete).length}</p>

            <ul>
                {lista.map(({ title, isComplete, id }) => {
                    return <li key={id}>
                        <input 
                            type="checkbox"
                            checked={isComplete}
                            onChange={() => {
                                setLista((oldLista) => {
                                    return oldLista.map((ListItem) => {
                                        if (ListItem.title === title) {
                                            return {
                                                ...ListItem,
                                                isComplete: !ListItem.isComplete
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