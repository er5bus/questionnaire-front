import React from 'react';
import ContentLoader from 'react-content-loader';


const QuestionDisplayLoader = () => (
  <ContentLoader 
    speed={2}
    height={275}
    width={500}
    viewBox="0 0 500 275"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{
      width:"100%"
    }}
  >
    <rect x="10" y="79" rx="3" ry="3" width="410" height="6" /> 
    <rect x="10" y="95" rx="3" ry="3" width="380" height="6" /> 
    <rect x="10" y="111" rx="3" ry="3" width="178" height="6" /> 
    <rect x="11" y="33" rx="3" ry="3" width="410" height="10" /> 
    <rect x="12" y="156" rx="3" ry="3" width="410" height="6" /> 
    <rect x="14" y="220" rx="0" ry="0" width="137" height="24" />
  </ContentLoader>
)

export default QuestionDisplayLoader
