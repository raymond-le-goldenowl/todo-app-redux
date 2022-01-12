import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlicer from "./todoListSlice";

export default function TodoList() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Middle");

  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlicer.actions.addTodo({
        id: uuidv4(),
        name: name,
        priority: priority,
        completed: false,
      })
    );

    setName("");
    setPriority("Middle");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {Object.values(todoList).map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }}>
          <Input value={name} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
