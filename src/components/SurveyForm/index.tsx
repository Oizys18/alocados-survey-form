import * as SC from "./SurveyForm.styles";
import Input from "@base/Input";
import Button from "@base/Button";

const SurveyForm = () => {
  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.Title>설문 만들기</SC.Title>
        <Input.Filled label="설문 제목" placeholder="설문 제목" />
        <Input.Filled label="설명" placeholder="설명" />
        <Input.Dense />
        <Button />
      </SC.Container>
    </SC.Wrapper>
  );
};

export default SurveyForm;
