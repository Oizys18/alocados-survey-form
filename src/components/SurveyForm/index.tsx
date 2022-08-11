import * as SC from "./SurveyForm.styles";
import Input from "@base/Input";
import Button from "@base/Button";
import Divider from "@base/Divider";
import { useState } from "react";
import { useSurveyDispatch, useSurveyState } from "src/context/SurveyContext";

const SurveyForm = () => {
  const state = useSurveyState();
  const dispatch = useSurveyDispatch();

  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
    question: [{ content: "", options: [""] }],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleQuestionInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      question: formInputs.question.map((question, index) => {
        if (index === Number(name)) {
          return {
            ...question,
            content: value,
          };
        }
        return question;
      }),
    });
  };
  const handleOptionInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    questionIndex: Number,
    optionIndex: Number
  ) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      question: formInputs.question.map((question, qIndex) => {
        if (qIndex === questionIndex) {
          return {
            ...question,
            options: question.options.map((option, oIndex) => {
              if (oIndex === optionIndex) {
                return value;
              }
              return option;
            }),
          };
        }
        return question;
      }),
    });
  };

  const handleAddQuestion = () => {
    setFormInputs({
      ...formInputs,
      question: [...formInputs.question, { content: "", options: [""] }],
    });
  };
  const handleAddOption = (questionIndex: Number) => {
    setFormInputs({
      ...formInputs,
      question: formInputs.question.map((question, qIndex) => {
        if (qIndex === questionIndex) {
          return {
            ...question,
            options: [...question.options, ""],
          };
        }
        return question;
      }),
    });
  };

  const handleRemoveOption = (questionIndex: Number, optionIndex: Number) => {
    setFormInputs({
      ...formInputs,
      question: formInputs.question.map((question, qIndex) => {
        if (qIndex === questionIndex) {
          return {
            ...question,
            options: question.options.filter((option, oIndex) => {
              return oIndex !== optionIndex;
            }),
          };
        }
        return question;
      }),
    });
  };

  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.Title>설문 만들기</SC.Title>
        <Input.Filled
          placeholder="설문 제목"
          value={formInputs.title}
          name="title"
          onChange={handleInputChange}
        />
        <Input.Filled
          placeholder="설명"
          value={formInputs.description}
          name="description"
          onChange={handleInputChange}
        />
        <Divider />
        {formInputs.question
          ? formInputs.question.map((question, questionIndex) => {
              return (
                <>
                  <SC.Question key={questionIndex}>
                    <Input.Filled
                      placeholder="질문"
                      value={question.content}
                      name={questionIndex.toString()}
                      onChange={handleQuestionInputChange}
                    />
                    {question.options.map((option, optionIndex) => {
                      return (
                        <SC.Option key={optionIndex}>
                          <Input.Filled
                            placeholder="옵션"
                            value={option}
                            name={optionIndex.toString()}
                            onChange={(e) =>
                              handleOptionInputChange(
                                e,
                                questionIndex,
                                optionIndex
                              )
                            }
                          />
                          <Button.Block
                            text="삭제"
                            short
                            color="#F72585"
                            onClick={() =>
                              handleRemoveOption(questionIndex, optionIndex)
                            }
                          />
                        </SC.Option>
                      );
                    })}
                    <Button.Block
                      text="옵션 추가"
                      short
                      color="#6B4FFF"
                      onClick={() => handleAddOption(questionIndex)}
                    />
                  </SC.Question>
                  <Divider />
                </>
              );
            })
          : null}

        <Button.Block
          text="질문 추가"
          short
          color="#6B4FFF"
          onClick={handleAddQuestion}
        />
        <Divider />
        <SC.ButtonContainer>
          <Button.Text text="불러오기" onClick={() => console.log(state)} />
          <Button.Text text="초기화" />
        </SC.ButtonContainer>
        <Button.Block text="저장" color="#6B4FFF" />
      </SC.Container>
    </SC.Wrapper>
  );
};

export default SurveyForm;
