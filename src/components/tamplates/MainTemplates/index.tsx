import { Container, Menu } from "lucide-react";
import { Logo } from "../../Logo";
import { Footer } from "../../Footer";

type MainTemplateProps = {
  children: React.ReactNode;
};
export function MainTemplate({ children }: MainTemplateProps) {
  
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container> 
       <Footer />
      </Container>

    </>
  );
}