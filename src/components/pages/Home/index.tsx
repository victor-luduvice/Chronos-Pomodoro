import { Container } from "../../Container";
import { CountDown } from "../../CountDown/App";
import { MainForm } from "../../MainForm";
import { MainTemplate as MainTemplateLayout } from "../../tamplates/MainTemplates";


export function MainTemplate() {
    return (
        <MainTemplateLayout>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplateLayout>
    );
}