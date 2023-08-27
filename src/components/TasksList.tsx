import { useSelector } from 'react-redux';
import TaskItem from "./TaskItem";
import { IState, ITodo } from '@/redux/Slice';

const TasksList = () => {
  // const tasks = useSelector((state:IState):ITodo[] | [] => {
  const tasks: ITodo[] = useSelector((state: IState): any => {
    console.log('state', state.todo);
    return state.todo
  })
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
        />
      ))}
    </>
  );
};

export default TasksList;