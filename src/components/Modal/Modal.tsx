import { Container, Content } from "./styles";


function Modal(props: any) {
  return (
    <Container
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <Content
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </Content>
    </Container>
  );
}

export default Modal;
