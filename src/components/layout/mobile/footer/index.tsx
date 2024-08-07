import React, { useState } from "react";
import styled from "@emotion/styled";
import colors from "constants/colors";
import { media } from "components/styles";
import useChannel from "context/channel";

const Container = styled.footer`
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  ${media.mobile`
    padding: 4px 8px;
    position: fixed;
  `}
`;

interface ContentProps {
  focus: boolean;
}

const Content = styled.div<ContentProps>`
  border: ${({ focus }) => (focus ? "2px" : "1px")} solid ${colors.border};
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 6px;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
`;

const Input = styled.textarea`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 6px;
  resize: none;
  border: 0;
  font-size: 16px;
  :focus {
    outline: none;
    bor
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
`;

const Button = styled.a`
  border-radius: 6px;
  background: ${colors.accent};
  color: white;
  padding: 10px 16px;
`;

const CHAT_INPUT_FORM = "chat-input-form";

const Footer: React.FC = () => {
  const {
    state: { current },
  } = useChannel();
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState("");
  const placeholder = ["Message", `#${current?.name}.`].join(" ");

  return (
    <Container>
      <Content focus={focus}>
        <Input
          className={CHAT_INPUT_FORM}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e: any) => {
            if (e.keyCode === 13) {
              return;
            }
            setContent(e.target.value);
          }}
        />
      </Content>
      <FormFooter>
        <Button
          onClick={() => {
            postMessage({ sender: "you", content });
            setContent("");
            const ele = document.querySelector(`.${CHAT_INPUT_FORM}`);
            if (ele) {
              ele.value = "";
            }
          }}
        >
          send
        </Button>
      </FormFooter>
    </Container>
  );
};

export default Footer;
