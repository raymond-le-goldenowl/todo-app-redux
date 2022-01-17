import { EditOutlined } from "@ant-design/icons/lib/icons";
import { Row, Tag, Checkbox, Button, Select, Col, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlicer from "../TodoList/todoListSlice";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, priority, completed }) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const todoList = useSelector(todosRemainingSelector);
  const [updateTodo, setUpdateTodo] = useState({
    id: null,
    name: null,
    priority: null,
    completed: null,
  });

  useEffect(() => {
    setUpdateTodo(todoList.find((todo) => todo.id === todoId));
  }, [todoId, todoList]);

  const handleButtonEditClick = () => {
    setTodoId(id);
    showModal();
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlicer.actions.toggleTodoStatus(id));
  };

  const handleClickDeleteTodo = () => {
    dispatch(todoListSlicer.actions.deleteTodo(id));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(todoListSlicer.actions.editTodo(updateTodo));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (event) => {
    setUpdateTodo({ ...updateTodo, name: event.target.value });
  };
  const handlePriorityChange = (value) => {
    setUpdateTodo({ ...updateTodo, priority: value });
  };

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
          {t(`todo_list.${priority.toLowerCase()}`)}
        </Tag>
        <Button
          type="primary"
          size="small"
          shape="circle"
          style={{
            marginLeft: 15,
          }}
          onClick={handleButtonEditClick}
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
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Col span={24}>
          <Input.Group style={{ display: "flex" }}>
            <Input value={updateTodo?.name} onChange={handleInputChange} />
            <Select
              defaultValue="Medium"
              value={updateTodo?.priority}
              onChange={handlePriorityChange}
            >
              <Select.Option value="High" label="High">
                <Tag color="red">{t("add_todo.high")}</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">{t("add_todo.medium")}</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">{t("add_todo.low")}</Tag>
              </Select.Option>
            </Select>
          </Input.Group>
        </Col>
      </Modal>
    </Row>
  );
}
