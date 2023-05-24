import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Divider, message, Space } from "antd";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Email = () => {
  const [fromName, setFromName] = React.useState("");
  const [fromPhone, setFromPhone] = React.useState("");
  const [fromZip, setFromZip] = React.useState("");
  const [fromEmail, setFromEmail] = React.useState("");
  const [messages, setMessages] = React.useState("");
  const [sending, setSending] = React.useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Message Sent! Thank you for contacting us.",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Error, please try again later.",
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_aczu0bm",
        "template_fi9pmge",
        event.target,
        "3rnZFYakQe0qkg5tq"
      );
      setSending(false);
      success();
    } catch (err) {
      setSending(false);
      alert(JSON.stringify(err));
      error();
    }
  };

  const styleInput = {
    width: "90%",
    height: "40px",
    border: "none",
    borderRadius: "5px",
    padding: "0 10px",
    fontSize: "18px",
    color: "#159792",
    outline: "none",
  };

  const styleIcon = {
    fontSize: "25px",
    color: "#8C8C8C",
  };

  return (
    <>
      <div
        style={{
          background: "#159792",
          maxWidth: "800px",
          display: "flex",
          justifyContent: "space-around",
          padding: "30px",
        }}
      >
        {contextHolder}
        <form onSubmit={handleSubmit}>
          <Space
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
            direction="vertical"
          >
            <Space
              wrap={true}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div className="field">
                <label htmlFor="from_name">
                  <UserOutlined style={styleIcon} />
                </label>
                <input
                  style={styleInput}
                  placeholder="Name"
                  type="text"
                  name="from_name"
                  id="from_name"
                  value={fromName}
                  onChange={(event) => setFromName(event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="from_name">
                  <MailOutlined style={styleIcon} />
                </label>
                <input
                  style={styleInput}
                  placeholder="Email"
                  type="email"
                  name="from_email"
                  id="from_email"
                  value={fromEmail}
                  onChange={(event) => setFromEmail(event.target.value)}
                  required
                />
              </div>
            </Space>
            <Space
              wrap={true}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div className="field">
                <label htmlFor="from_phone">
                  <PhoneOutlined style={styleIcon} />
                </label>
                <input
                  style={styleInput}
                  placeholder="Phone"
                  type="text"
                  name="from_phone"
                  id="from_phone"
                  value={fromPhone}
                  onChange={(event) => setFromPhone(event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="from_zip">
                  <SendOutlined style={styleIcon} />
                </label>
                <input
                  style={styleInput}
                  placeholder="Zip Code"
                  type="text"
                  name="from_zip"
                  id="from_zip"
                  value={fromZip}
                  onChange={(event) => setFromZip(event.target.value)}
                  required
                />
              </div>
            </Space>
          </Space>
          <Space
            direction="vertical"
            style={{
              width: "100%",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "10px",
                marginBottom: "10px",
                height: "150px",
              }}
            >
              <label htmlFor="message">
                <EditOutlined style={styleIcon} />
              </label>
              <input
                style={styleInput}
                placeholder="Message"
                type="text-area"
                name="message"
                id="message"
                value={messages}
                onChange={(event) => setMessages(event.target.value)}
                required
              />
            </div>

            <div>
              <button
                className="button-contact-us"
                style={{
                  marginTop: "10px",
                  width: "100%",
                  height: "70px",
                  padding: "0 10px",
                  fontSize: "22px",
                  backgroundColor: "#159792",
                  outline: "none",
                  color: "#fff",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  border: "1px solid #ffffff",
                  fontWeight: "600",
                }}
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </Space>
        </form>
      </div>
    </>
  );
};

export default Email;
