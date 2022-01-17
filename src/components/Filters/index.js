import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import filtersSlicer from "./filtersSlice";
const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriorities, setFilterPriorities] = useState([]);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    dispatch(filtersSlicer.actions.searchFilterChange(event.target.value));
  };

  const onFilterStatusChange = (event) => {
    setFilterStatus(event.target.value);
    dispatch(filtersSlicer.actions.statusFilterChange(event.target.value));
  };

  const handlePriorityChange = (values) => {
    setFilterPriorities(values);
    dispatch(filtersSlicer.actions.priorityFilterChange(values));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          {t('filter.search')}
        </Typography.Paragraph>
        <Search
          placeholder={t('filter.input_search_text')}
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          {t('filter.filter_by_status')}
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={onFilterStatusChange}>
          <Radio value="All">{t('filter.all')}</Radio>
          <Radio value="Completed">{t('filter.completed')}</Radio>
          <Radio value="Todo">{t('filter.todo')}</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          {t('filter.filter_by_priority')}
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder={t('filter.please_select')}
          style={{ width: "100%" }}
          value={filterPriorities}
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
      </Col>
    </Row>
  );
}
