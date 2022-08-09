import { useCallback, useEffect, useState } from "react";
import { ApiException, ITarefa, TarefasService } from "../../shared/services/index";

export const Dashboard = () => {

    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {

        TarefasService.getAll()
            .then((result) => {

                if (result instanceof ApiException) {

                    console.log(result.message);
                    alert(result.message);

                } else {

                    console.log(result);
                    setLista(result);

                }

            });

    }, [setLista]);

    const handleInputKeyDow: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {

        if (e.key === "Enter") {

            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = "";

            if (lista.some(({ title }) => title === value)) return;

            TarefasService.create(
                {
                    title: value,
                    isComplete: false
                }
            ).then((result) => {

                if (result instanceof ApiException) {

                    alert(result.message);

                } else {

                    setLista((oldLista) => [...oldLista, result]);

                }

            });

        }

    }, [lista]);

    const handleToggleComplete = useCallback((id: number) => {

        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!tarefaToUpdate) return;

        TarefasService.updateById(id,{

            ...tarefaToUpdate, 
            isComplete: !tarefaToUpdate.isComplete
        
        }).then((result) => {

            if (result instanceof ApiException) {

                alert(result.message);
            
            } else {

                setLista(oldLista => {
                    return oldLista.map(oldListItem => {
                        if (oldListItem.id === id) return result;
                        return oldListItem;
                    });
                });
            
            }
        
        });
    }, [lista]);

    return (
        <div>
            <p>Lista</p>

            <input
                type="text"
                onKeyDown={handleInputKeyDow}
            />

            <p>{lista.filter(({ isComplete }) => isComplete).length}</p>

            <ul>
                {lista.map(({ title, isComplete, id }) => {
                    return <li key={id}>
                        <input
                            type="checkbox"
                            checked={isComplete}
                            onChange={() => handleToggleComplete(id)}
                        />
                        {title}
                    </li>
                })}
            </ul>

        </div>
    );

}