"use client";
import TasksHeader from '@/components/TasksHeader';
import TaskForm from '@/components/TaskForm';
import TasksList from '@/components/TasksList';

const page = () => {
  return (
    <div className="container">
      <article>
        <TasksHeader />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
  );
};

export default page;