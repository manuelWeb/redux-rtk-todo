import { ITodo, deleteTask, toggleTask } from '@/redux/Slice';
import { useDispatch } from 'react-redux';

const TaskItem = ({ task }: any) => {

  const dispatch = useDispatch()

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          // onChange={() => dispatch(createToggle(task.id))}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span
          /* onClick={() => dispatch({
            type: 'todo/deleteTask',
            payload: task.id
          })} */
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;