import * as SC from "./SurveyOption.styles";
import { Input, Button } from "@base";
const SurveyOption = () => {
  return (
    <SC.Wrapper>
      <Input.Dense placeholder="옵션" />
      <Button.Block text="삭제" short color="#F72585" />
    </SC.Wrapper>
  );
};

export default SurveyOption;
