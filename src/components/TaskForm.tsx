import { useState, SyntheticEvent } from "react";
import cn from 'classnames'
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux/Slice';

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(addTask(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cn('text-black')}
      />
    </form>
  );
};

export default TaskForm;