import ToDo from "./(components)/toDo";

const ToDoListPage = () => {
  return (
    <div className="flex flex-1 m-12 gap-8 max-xl:flex-col ">
      <ToDo itemTitle="Metas do mês" itemType="goals" />
      <ToDo itemTitle="Tarefas da semana" itemType="tasks" />
    </div>
  );
};

export default ToDoListPage;
