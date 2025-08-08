import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import LoginLogoIcon from "../../assets/icons/LoginLogoIcon";
import InputTel from "./InputTel";
import UzbFlagIcon from "../../assets/icons/UzbFlagIcon";

function LoginPage() {
  const [form] = Form.useForm();
  const [selected, setSelected] = useState("email");

  const handleToggle = (type) => {
    setSelected(type);
    form.resetFields();
  };

  const onFinish = (values) => {
    if (selected === "telefon")
      console.log("Received values of form: ", values);
  };

  return (
    <div className="login">
      <Form
        form={form}
        className="form"
        name="login"
        style={{
          padding: "32px",
          background: "white",
          height: "620px",
          width: "375px",
          borderRadius: "32px",
        }}
        onFinish={onFinish}
      >
        <div className="form__header">
          <div>
            <Link to="/">
              <ArrowIcon />
            </Link>
          </div>
          <div>
            <LoginLogoIcon />
          </div>
          <div> &nbsp; </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <h1 style={{ fontSize: 22 }}>Войдите с Яндекс ID</h1>
        </div>

        <div
          style={{
            width: "100%",
            border: "1px solid #d8dce6",
            borderRadius: "20px",
            padding: "2px",
            marginTop: "24px",
          }}
        >
          <Button
            type={selected === "email" ? "primary" : "default"}
            onClick={() => handleToggle("email")}
            className={`form__btn email ${
              selected === "email" ? "active" : ""
            }`}
          >
            Почта
          </Button>
          <Button
            type={selected === "telefon" ? "primary" : "default"}
            onClick={() => handleToggle("telefon")}
            className={`form__btn telefon ${
              selected === "telefon" ? "active" : ""
            }`}
          >
            Телефон
          </Button>
        </div>

        {selected === "email" ? (
          <Form.Item
            className="form-item__email"
            name="email"
            rules={[{ required: true, message: "Логин не указан" }]}
          >
            <Input
              className="email__input"
              placeholder="Логин или email"
              type="email"
              autoComplete="off"
            />
          </Form.Item>
        ) : (
          <div className="form-item__wrap">
            <span className="flag-icon">
              <UzbFlagIcon />
            </span>
            <Form.Item
              className="form-item__tel"
              name="phone"
              rules={[{ required: true, message: "Phone number!" }]}
            >
              <InputTel />
            </Form.Item>
          </div>
        )}

        <Button htmlType="submit" className="submit__btn">
          Войти
        </Button>

        {/* <Form.Item
          className="username"
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item> */}
      </Form>
    </div>
  );
}

export default LoginPage;
