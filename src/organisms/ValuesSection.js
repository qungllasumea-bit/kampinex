import InfoCard from "../molecules/infoCard.js";
import "./ValuesSection.css";

import missionIcon from "../assets/img/missionIcon.png";
import visionIcon from "../assets/img/viyionIcon.png";
import valuesIcon from "../assets/img/iconThree.png";
import Text from "../atoms/Text.js";
import Paragraph from "../atoms/Paragraph.js";

const ValuesSection = ({icon, text, paragraph}) => {
  const data = [
    {
      icon: missionIcon,
      text: "Our Mission",
      paragraph:
        "Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.",
    },
    {
      icon: visionIcon,
      text: "Our Vision",
    paragraph:
        "Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.",
    },
    {
      icon: valuesIcon,
      text: "Our Values",
      paragraph:
        "Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.",
    },
  ];

  return (
    <div className="values-section">
      {data.map((item, index) => (
        <InfoCard
          key={index}
          icon={item.icon}
          text={item.text}
          paragraph={item.paragraph}
        />
      ))}
    </div>
  );
};

export default ValuesSection;