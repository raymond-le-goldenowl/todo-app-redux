import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Button, Select, Tag } from "antd";

import Todo from "../Todo";
import todoListSlicer from "./todoListSlice";
import { todosRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

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
    setPriority("Medium");
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
              <Tag color="red">{t("todo_list.high")}</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">{t("todo_list.medium")}</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">{t("todo_list.low")}</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            {t("add_todo.add")}
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
