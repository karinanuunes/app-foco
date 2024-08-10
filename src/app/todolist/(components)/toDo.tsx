"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Check, Plus, Settings2, Terminal, Undo, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ToDoProps {
  itemTitle: string;
  itemType: string;
}

const ToDo = ({ itemTitle, itemType }: ToDoProps) => {
  const [item, setItem] = useState("");
  const [storedItems, setStoredItems] = useState<string[]>([]);
  const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);
  const [itemHoverId, setItemHoverId] = useState<number | null>(null);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [focusedItem, setFocusedItem] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const getItems = localStorage.getItem(itemType);
    const storagedItems = getItems ? JSON.parse(getItems) : [];
    setStoredItems(storagedItems);
  }, [itemType]);

  const handleTask = () => {
    if (item.trim()) {
      const updatedItems = [...storedItems, item];
      localStorage.setItem(itemType, JSON.stringify(updatedItems));
      setStoredItems(updatedItems);
      setItem("");
    }
  };

  const handleUpdateTask = (id: number) => {
    setSelectedItemIds((prevSelectedItemIds) =>
      prevSelectedItemIds.includes(id)
        ? prevSelectedItemIds.filter((itemId) => itemId !== id)
        : [...prevSelectedItemIds, id]
    );
  };

  const handleChangeTask = (id: number) => {
    setEditItemId(id);
    setFocusedItem(!focusedItem);
    setNewItem(storedItems[id]);
  };

  const handleSaveTask = () => {
    if (editItemId !== null && newItem.trim()) {
      const updatedTasks = storedItems.map((item, index) =>
        index === editItemId ? newItem : item
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setStoredItems(updatedTasks);
      setEditItemId(null);
      setNewItem("");
      setFocusedItem(false);
      setErrorMessage(false);
    } else if (newItem.trim() === "") {
      setErrorMessage(!errorMessage);
    }
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = storedItems.filter((_, index) => index !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setStoredItems(updatedTasks);
  };

  return (
    <div className="flex flex-col flex-1 p-6 gap-8 w-full h-fit bg-white rounded-3xl">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-medium">{itemTitle}</h1>
        <div className="flex gap-4">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Adicionar nova tarefa"
            className="w-full h-12 p-4 border border-orange-800 rounded-xl outline-none"
          />
          <button
            className="bg-orange-800 text-white p-3 rounded-2xl text-xl"
            onClick={handleTask}
          >
            <Plus width={18} />
          </button>
        </div>
      </div>
      {storedItems.map((item, id) => (
        <div key={id} className="flex flex-col gap-6">
          <div
            className="flex items-center justify-between"
            onMouseEnter={() => setItemHoverId(id)}
            onMouseLeave={() => setItemHoverId(null)}
          >
            <div className="flex items-center gap-2 w-full">
              <button
                className={`border border-orange-800 rounded-full w-4 h-4 ${
                  selectedItemIds.includes(id) ? "bg-orange-800" : ""
                }`}
                onClick={() => handleUpdateTask(id)}
              ></button>
              {editItemId === id && focusedItem === true ? (
                <div className="flex justify-between w-full">
                  <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="outline-none w-full font-medium text-gray-500"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSaveTask}>
                      <Check width={18} />
                    </button>
                    <button onClick={() => setFocusedItem(false)}>
                      <Undo width={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <span
                  className={
                    selectedItemIds.includes(id)
                      ? "line-through text-gray-400"
                      : ""
                  }
                >
                  {item}
                </span>
              )}
            </div>
            <div
              className={
                itemHoverId === id && focusedItem === false
                  ? "flex gap-2"
                  : "hidden"
              }
            >
              <button onClick={() => handleChangeTask(id)}>
                <Settings2 width={18} />
              </button>
              <button onClick={() => handleDeleteTask(id)}>
                <X width={18} />
              </button>
            </div>
          </div>
          {editItemId === id && errorMessage && (
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Não é possível salvar uma tarefa vazia.</AlertTitle>
            </Alert>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDo;
