import { ITodo } from '@/redux/Slice';
import { useSelector } from 'react-redux';

const TasksHeader = () => {
  const tasks = useSelector((state: any) => state.todo)
  const undoneTasks = tasks.filter((t: ITodo) => t.done === false);

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;