import { Typography, Divider, Button } from "antd";
import { Trans, useTranslation } from "react-i18next";

import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

import "./App.css";

const { Title } = Typography;

function App() {
  const { i18n } = useTranslation();

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <div>
        <Button
          type="primary"
          size="small"
          shape="default"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </Button>

        <Button
          type="primary"
          size="small"
          shape="default"
          style={{
            marginLeft: 5,
          }}
          onClick={() => {
            i18n.changeLanguage("vn");
          }}
        >
          VN
        </Button>
      </div>
      <Title style={{ textAlign: "center" }}>
        <Trans i18nKey={"logo"} />
      </Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
