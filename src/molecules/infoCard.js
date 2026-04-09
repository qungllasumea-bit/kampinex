
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import Paragraph from "../atoms/Paragraph";
import "../organisms/ValuesSection.css"
import "../organisms/WhatWeDo.css"
const InfoCard = ({ icon, text, paragraph, showIcon = true }) => {
  return (
    <div className="info-card">
      
      {showIcon && icon && <Icon src={icon} className="icon" />}
      
      <Text text={text} className="card-title" />
      <Paragraph paragraph={paragraph} ParagraphClassName="card-paragraph" />
    </div>
  );
};

export default InfoCard;