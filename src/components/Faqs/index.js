
import {FaqContainer,FaqCardContainer,FaqHeading,
    FaqListContainer} from './styled'
import FaqItem from '../FaqItem'
const Faqs=(props)=>{
    const {faqsList}=props
    return(
        <FaqContainer>
            <FaqCardContainer>
                <FaqHeading>FAQs</FaqHeading>
                <FaqListContainer>
                  {faqsList.map(eachFaq=>(
                    <FaqItem eachFaq={eachFaq} key={eachFaq.id}/>
                  ))}
                </FaqListContainer>

            </FaqCardContainer>
        </FaqContainer>
    )

}

export default Faqs