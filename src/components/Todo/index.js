import { EditOutlined } from "@ant-design/icons/lib/icons";
import { Row, Tag, Checkbox, Button } from "antd";
import { useState } from "react";

import { useDispatch } from "react-redux";
import todoListSlicer from "../TodoList/reducer";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, priority, completed }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlicer.actions.toggleTodoStatus(id));
  };

  const handleClickDeleteTodo = () => {
    dispatch(todoListSlicer.actions.deleteTodo(id));
  }
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox
        checked={checked}
        onChange={() => {
          toggleCheckbox();
        }}
      >
        {name}
      </Checkbox>
      <div>
        <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
          {priority}
        </Tag>
        <Button
         type="primary"
          size="small"
          shape="circle"
          style={{
            marginLeft: 15,
          }}
        >
          <EditOutlined />
        </Button>
        <Button
        onClick={handleClickDeleteTodo}
         type="primary"
          danger
          size="small"
          shape="circle"
          style={{
            marginLeft: 15,
          }}
        >
          x
        </Button>
      </div>
    </Row>
  );
}
