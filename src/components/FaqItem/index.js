import {useState} from 'react'

import {FaqItemContainer,QuestionFaqContainer,QuestionHeader,Icon,
    AnswerTextContainer,AnswerPara,IconButton} from './styled'



const FaqItem=(props)=>{
    const {eachFaq}=props
    const {questionText,answerText}=eachFaq
    const [isShow,setShow]=useState(false)

  const  onClickIcon=()=>{
        setShow(!isShow)
    }

    const imageUrl=!isShow?"https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png":"https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
    const altValue=!isShow?'plus':"minus"
    return(
        <FaqItemContainer>
             <QuestionFaqContainer>
                <QuestionHeader>{questionText}</QuestionHeader>
                <IconButton type="button">
                <Icon src={imageUrl} alt={altValue} onClick={onClickIcon}/>
                </IconButton>
             </QuestionFaqContainer>

             {isShow&&
             <AnswerTextContainer>
               
                <AnswerPara>{answerText}</AnswerPara>
             </AnswerTextContainer>}
             
        </FaqItemContainer>
    )

}

export default FaqItem