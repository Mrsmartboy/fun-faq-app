import styled from 'styled-components'

export const FaqItemContainer = styled.li`
   border: 2px solid  #d7dae6;
   padding: 10px;
  width: 100%;
   border-radius: 10px;
   margin-bottom: 10px;
`
export const QuestionFaqContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const QuestionHeader= styled.h1`
  color: #52606d;
  font-size: 20px;
`
export const Icon = styled.img`
`

export const AnswerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Hrline= styled.hr`
  color: #d7dae6;

`
export const AnswerPara= styled.p`
  color: #9aa5b1;
  font-size: 15px;
  font-weight: bold;
  
`
export const IconButton= styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`